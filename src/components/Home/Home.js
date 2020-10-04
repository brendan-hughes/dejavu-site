import React, { Component, Fragment } from 'react';
import CTA from './CTA';
import Band from './Band';
import DividerB from './DividerB';
import Music from './Music';
import DividerC from './DividerC';
import Shows from './Shows';
import DividerD from './DividerD';
import GetInTouch from './GetInTouch';
import Dot from './Dot';
import Deco6 from '../Decorative/Deco6';
import takeATripScript from '../../scripts/takeATripScript';

import './Home.css';
class Home extends Component {
	componentDidMount() {
		takeATripScript();
	}
	render() {
		return (
			<Fragment>
				<section className="homeSection" id="home">
					<div className="headerContainer">
						<h1 className="dejaVuHeader">Déjà Vu</h1>
						<div className="dejaVuTaglineContainer">
							<p className="dejaVuTagline">Songs</p>
							<p className="dejaVuTagline">you</p>
							<p className="dejaVuTagline">remember,</p>
							<p className="dejaVuTagline">all</p>
							<p className="dejaVuTagline">over</p>
							<p className="dejaVuTagline">again.</p>
						</div>
					</div>
					<div className="heroArt">
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 457.74 457.74"
						>
							<circle class="redcircle-1" cx="228.87" cy="228.87" r="208.87" />
							<circle class="redcircle-2" cx="228.87" cy="228.87" r="156.36" />
							<circle class="redcircle-3" cx="228.87" cy="228.87" r="90.33" />
						</svg>
					</div>
					<div className="heroArt2">
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 457.74 457.74"
						>
							<circle class="redcircle-1" cx="228.87" cy="228.87" r="208.87" />
							<circle class="redcircle-2" cx="228.87" cy="228.87" r="156.36" />
							<circle class="redcircle-3" cx="228.87" cy="228.87" r="90.33" />
						</svg>
					</div>

					<div className="heroArt3">
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 457.74 457.74"
						>
							<circle class="redcircle-1" cx="228.87" cy="228.87" r="208.87" />
							<circle class="redcircle-2" cx="228.87" cy="228.87" r="156.36" />
							<circle class="redcircle-3" cx="228.87" cy="228.87" r="90.33" />
						</svg>
					</div>
					<div className="heroArt4">
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 457.74 457.74"
						>
							<circle class="redcircle-1" cx="228.87" cy="228.87" r="208.87" />
							<circle class="redcircle-2" cx="228.87" cy="228.87" r="156.36" />
							<circle class="redcircle-3" cx="228.87" cy="228.87" r="90.33" />
						</svg>
					</div>
					<div className="heroArt5">
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 457.74 457.74"
						>
							<circle class="redcircle-1" cx="228.87" cy="228.87" r="208.87" />
							<circle class="redcircle-2" cx="228.87" cy="228.87" r="156.36" />
							<circle class="redcircle-3" cx="228.87" cy="228.87" r="90.33" />
						</svg>
					</div>
					<div className="takeATripTrigger">
						<div className="takeATripTextContainer">
							<h2 className="takeATripTriggerText">Take A Trip</h2>
							<h2 className="dividerABackground" id="dividerABackground1">
								Take A Trip
							</h2>
							<h2 className="dividerABackground" id="dividerABackground2">
								Take A Trip
							</h2>
							<h2 className="dividerABackground" id="dividerABackground3">
								Take A Trip
							</h2>
							<h2 className="dividerABackground" id="dividerABackground4">
								Take A Trip
							</h2>
							<h2 className="dividerABackground" id="dividerABackground5">
								Take A Trip
							</h2>
						</div>
						<div className="takeATripTriggerImageContainer">
							<img
								className="takeATripTriggerImage activeTriggerImage normalVan"
								src={require('../../assets/normalVan.png')}
							></img>
							<img
								className="takeATripTriggerImage inactiveTriggerImage trippyVan"
								src={require('../../assets/trippyVan.png')}
							></img>
							<Deco6 />
						</div>
					</div>
				</section>

				<Band />
				<DividerB />
				<Music />
				<DividerC />
				<Shows />
				<DividerD />
				<GetInTouch />
				<CTA />
				<Dot />
			</Fragment>
		);
	}
}
export default Home;
