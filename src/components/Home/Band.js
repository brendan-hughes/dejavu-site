import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './band.css';

class Band extends Component {
	render() {
		return (
			<section className="bandSection" id="band">
				<div className="bandHeaderContainer">
					<h2 className="bandHeader">The{'  '}Band</h2>
					<h2 className="bandHeaderBackground" id="bandBackground1">
						The{'  '}Band
					</h2>
					<h2 className="bandHeaderBackground" id="bandBackground2">
						The{'  '}Band
					</h2>
					<h2 className="bandHeaderBackground" id="bandBackground3">
						The{'  '}Band
					</h2>
					<h2 className="bandHeaderBackground" id="bandBackground4">
						The{'  '}Band
					</h2>
					<h2 className="bandHeaderBackground" id="bandBackground5">
						The{'  '}Band
					</h2>
				</div>

				<div className="bandContentContainer">
					<div className="bandLeft">
						<div className="innerBand">
							<ReactPlayer
								className="bandVideo"
								url="https://www.youtube.com/watch?v=hpLvkY97H-I"
								light={require('../../assets/bandpic.jpeg')}
								controls="false"
								playing="true"
								style={{ height: '100%', width: '100%' }}
							/>
						</div>

						<div className="trippyBandPic"></div>
						<img
							className="bandBorderTop"
							src={require('../../assets/new/psyc-top-border.svg')}
						></img>
						<img
							className="bandBorderBottom"
							src={require('../../assets/new/psyc-bottom-border.svg')}
						></img>
						<img
							className="normalBandBorder visibleBorder "
							src={require('../../assets/new/70s-border.svg')}
						></img>
					</div>
					<div className="bandRight">
						<div className="innerBandRight">
							<h3 className="meetTheBand">Meet The Band</h3>
							<hr></hr>
							<p>
								Deja Vu is a rock n roll party band situated in Collingwood, ON.
								It is made up of skilled, experienced musicians who have
								connected through their love of the great music of our youth.
							</p>
							<hr></hr>
							<p>
								Remember those church dances, school sock hops, and arena
								concerts? You will be singing along and dancing to those great
								songs all over again - you won’t sit down!
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Band;
