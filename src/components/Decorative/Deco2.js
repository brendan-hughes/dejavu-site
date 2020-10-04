import React, { Component } from 'react';
import './deco.css';

class Deco2 extends Component {
	render() {
		return (
			<div className="deco2Container decoContainer">
				<img
					className="deco2"
					src={require('../../assets/new/peace-1.png')}
				></img>
			</div>
		);
	}
}

export default Deco2;
