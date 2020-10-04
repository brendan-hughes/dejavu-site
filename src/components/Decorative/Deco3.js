import React, { Component } from 'react';
import './deco.css';

class Deco3 extends Component {
	render() {
		return (
			<div className="deco3Container decoContainer">
				<img
					className="deco3"
					src={require('../../assets/new/psyc-8.svg')}
				></img>
			</div>
		);
	}
}

export default Deco3;
