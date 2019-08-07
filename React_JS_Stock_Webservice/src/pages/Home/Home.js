import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';
import { watchLogin, LogOut } from '../../actions/AuthActions';

export class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
        };
        
		this.logout = this.logout.bind(this);
		this.backLoginScreen = this.backLoginScreen.bind(this);
		this.verifyStatus = this.verifyStatus.bind(this);
	}

	logout() {
        this.props.LogOut();
        this.backLoginScreen();
    }

    backLoginScreen() {
        this.props.history.push('/Login');
	}
	
	
	verifyStatus() {

        let status = this.props.isLogged;
        console.log(this.props);

        switch(status) {
            case 1:
                <Redirect to="/Home" />
               break;
            case 2:
                this.logout();
                break;
            default:
                this.logout();
                
        }
    }

    componentDidMount() {
        this.props.watchLogin();
    }

    componentDidUpdate() {
        this.verifyStatus();
    }

	render() {
		return (
			<div>
				<h1>Página Home...</h1><br/>

				<button onClick={this.logout}>Sair</button>
				<Link to="/Sobre">Ir para página sobre</Link>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
    return {
        isLogged:state.auth.isLogged
    }
}

const HomeConnect = connect(mapStateToProps, {watchLogin, LogOut})(Home);
export default HomeConnect;