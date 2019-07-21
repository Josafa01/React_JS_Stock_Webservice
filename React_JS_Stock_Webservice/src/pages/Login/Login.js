import React, { Component } from 'react';
import CSS from './Login.css';
import { connect } from 'react-redux';
import { watchLogin, getName, LoginUser, getEmail, getPass } from '../../actions/AuthActions';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            pass:'',
            submitted: false,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.login = this.login.bind(this);
        this.watchStatus = this.watchStatus.bind(this);
        this.signUpScreen = this.signUpScreen.bind(this);
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
        const { email, pass } = this.state;
        if(email && pass) {
            this.login(email, pass);
        }
        
    }

    componentDidUpdate() {
        this.watchStatus();
    }

    watchStatus() {
        if(this.props.isLogged === 1) {
            this.props.history.push('/Home');
        }
    }

    signUpScreen() {
        this.props.history.push('/SignUp');
    }

    login(email, pass) {
        this.props.LoginUser(
            email,
            pass
        );
    }


	render() {
		return (
			<div class="screen-login">
				<h1 class="title-login">Login</h1>

                <form class="form" onSubmit={this.handleSubmit}>
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

			</div>
		);
	}

}

const mapStateToProps = (state) => {
    return {
        email:state.auth.email,
        pass:state.auth.pass,
        isLogged:state.auth.isLogged
    }
}

const LoginConnect = connect(mapStateToProps, {watchLogin, LoginUser, getName, getEmail, getPass})(Login);
export default LoginConnect;