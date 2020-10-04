import React, { Component } from 'react';
import './deco.css';

class Deco1 extends Component {
	render() {
		return (
			<div className="deco1Container decoContainer">
				<img
					className="deco1"
					src={require('../../assets/new/flower-2.png')}
				></img>
			</div>
		);
	}
}

export default Deco1;
