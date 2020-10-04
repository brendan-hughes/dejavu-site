import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<a href="#band">
							The Band <img src={require('../../assets/band.png')}></img>
						</a>
					</li>
					<li>
						<a href="#music">
							The Music <img src={require('../../assets/radio.png')}></img>
						</a>
					</li>
					<li>
						<a href="#shows">
							The Shows <img src={require('../../assets/events.png')}></img>
						</a>
					</li>
					<li>
						<a href="#contact">
							Get In Touch <img src={require('../../assets/email.png')}></img>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
export default Navbar;
