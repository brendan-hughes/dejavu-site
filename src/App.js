import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Footer />
				</Router>
			</Provider>
		);
	}
}

export default App;
