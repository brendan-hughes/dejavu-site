import React, { Component } from 'react';
import './deco.css';

class Deco4 extends Component {
	render() {
		return (
			<div className="deco4Container decoContainer">
				<img
					className="deco4"
					src={require('../../assets/new/guitar.svg')}
				></img>
			</div>
		);
	}
}

export default Deco4;
