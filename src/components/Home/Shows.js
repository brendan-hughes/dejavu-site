import React, { Component } from 'react';
import './shows.css';
import Deco3 from '../Decorative/Deco3';
import Deco4 from '../Decorative/Deco4';
import Deco5 from '../Decorative/Deco5';
class Shows extends Component {
	render() {
		return (
			<section className="showsSection" id="shows">
				<div className="showsHeaderContainer">
					<h2 className="showsHeader">The Shows</h2>
					<h2 className="showsHeaderBackground" id="showsBackground1">
						The{'  '}Shows
					</h2>
					<h2 className="showsHeaderBackground" id="showsBackground2">
						The{'  '}Shows
					</h2>
					<h2 className="showsHeaderBackground" id="showsBackground3">
						The{'  '}Shows
					</h2>
					<h2 className="showsHeaderBackground" id="showsBackground4">
						The{'  '}Shows
					</h2>
					<h2 className="showsHeaderBackground" id="showsBackground5">
						The{'  '}Shows
					</h2>
				</div>
				<div className="showTextContainer">
					<p className="showsParagraph">
						No scheduled shows for the rest of 2020.
					</p>
					<img
						className="trippyShows"
						// src={require('../../assets/new/psyc-border.gif')}
					></img>
					<div className="normalShows"></div>
				</div>
				<Deco3 />
				<Deco4 />
				<Deco5 />
			</section>
		);
	}
}

export default Shows;
