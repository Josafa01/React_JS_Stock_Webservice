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

	componentDidMount() {
        this.props.watchLogin();
    }

    logout() {
        this.props.LogOut();
        this.backLoginScreen();
    }

    backLoginScreen() {
        this.props.history.push('/login');
    }

	render() {
		return (
            <div>{this.logout()}</div>
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