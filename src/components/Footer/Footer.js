import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<a className="footerLink" href="#home">
					<p className="footerText">Back to Top</p>
				</a>
				<a className="footerLink" href="https://www.brendanhughes.dev">
					<p className="lightFooterText">Developed by Brendan Hughes 2020</p>
				</a>
			</footer>
		);
	}
}
export default Footer;
