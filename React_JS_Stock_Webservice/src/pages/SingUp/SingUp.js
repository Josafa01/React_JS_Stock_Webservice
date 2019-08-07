import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import CSS from './SingUp.css';
import { connect } from 'react-redux';
import { watchLogin, getName, InsertNewUser, getEmail, getPass } from '../../actions/AuthActions';

class SingUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            pass:'',
            submitted: false
        };

        this.handleNameChange  = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange  = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.sgp = this.sgp.bind(this);
        this.watchStatus  = this.watchStatus.bind(this);
    }

    handleNameChange(event) { 
        this.setState ({name: event.target.value}); 
    }

    handleEmailChange(event) { 
        this.setState ({email: event.target.value}); 
    } 
    
    handlePassChange(event) { 
        this.setState ({pass: event.target.value}); 
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { name, email, pass } = this.state;
        if(name && email && pass) {
            this.sgp(name, email, pass);
        }
        
    }

    componentDidMount() {
        this.props.watchLogin();
        this.watchStatus();
    }

    componentDidUpdate() {
        this.watchStatus();
    }

    watchStatus() {
        if(this.props.isLogged === 1) {
            this.props.history.push('/Home');
        } 
    }

    sgp(name, email, pass) {
        this.props.InsertNewUser(
            name,
            email,
            pass
        );

        this.props.watchLogin();
        this.watchStatus();
    }


	render() {
		return (
			<div class="screen-login">
				<h1 class="title-login">Login</h1>

                <form class="form" onSubmit={this.handleSubmit}>
                    <label>
                    Nome:
                    <input type="text" name="nqame" value={this.state.value} onChange={this.handleNameChange} />
                    </label>

                    <label>
                    Email:
                    <input type="email" name="email" value={this.state.value} onChange={this.handleEmailChange} />
                    </label>

                    <label>
                    Senha:
                    <input type="password" name="pass" value={this.state.value} onChange={this.handlePassChange} />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>

                <Link to="/Login">Voltar</Link>

			</div>
		);
	}

}

const mapStateToProps = (state) => {
    return {
        name:state.auth.name,
        email:state.auth.email,
        pass:state.auth.pass,
        isLogged:state.auth.isLogged
    }
}

const SingUpConnect = connect(mapStateToProps, {watchLogin, InsertNewUser, getName, getEmail, getPass})(SingUp);
export default SingUpConnect;