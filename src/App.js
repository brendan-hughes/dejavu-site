import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import './App.css';
import TagManager from 'react-gtm-module';
import gtmScript from './scripts/gtmScript';

const tagManagerArgs = {
	gtmId: 'GTM-T7KC9D8',
	dataLayer: {},
};

TagManager.initialize(tagManagerArgs);

class App extends Component {
	componentDidMount() {
		gtmScript();
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Navbar />
					<div className="homeBackground"></div>
					<Route exact path="/" component={Home} />
					<Footer />
				</Router>
			</Provider>
		);
	}
}

export default App;
