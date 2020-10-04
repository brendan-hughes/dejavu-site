import React, { Component, Fragment } from 'react';
import './music.css';

class MusicCard extends Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	}
	render() {
		return (
			<div className="musicCard">
				<img
					className="albumArt"
					src={this.props.link}
					onMouseEnter={this.toggle}
					onMouseOut={this.toggle}
				></img>
				<p
					className={
						this.state.active === false
							? 'artistName'
							: 'artistName visibleArtistName'
					}
				>
					{this.props.artist}
				</p>
			</div>
		);
	}
}

export default MusicCard;
