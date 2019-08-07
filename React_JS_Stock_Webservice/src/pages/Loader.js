import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { watchLogin, LogOut } from '../actions/AuthActions';

class Loader extends Component {

    constructor(props) {
		super(props);
		this.state = {
			
		};

		this.logout = this.logout.bind(this);
        this.backLoginScreen = this.backLoginScreen.bind(this);
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
                this.props.history.push('/Home');
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
            <div>Loading...</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        isLogged:state.auth.isLogged
    }
}

const LoaderConnect = connect(mapStateToProps, {watchLogin, LogOut})(Loader);
export default LoaderConnect;