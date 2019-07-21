import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Config from './Config';
import Reducers from './Reducers';

import Loader from './pages/Loader';
import  Home  from './pages/Home';
import  Login from './pages/Login';
import { Sobre } from './pages/Sobre';
import { NotFound }  from './pages/NotFound';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Router basename={Config.BASE_URL}>
					<div>
						<Switch>
							<Route exact path="/" component={Loader} />
							<Route path="/home" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/sobre" component={Sobre} />
							<Route path="*" component={NotFound} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}

}

export default App;