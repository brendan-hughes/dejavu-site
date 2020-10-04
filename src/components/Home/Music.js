import React, { Component } from 'react';
import MusicCard from './MusicCard';
import Deco1 from '../Decorative/Deco1';
import Deco2 from '../Decorative/Deco2';
import './music.css';

class Music extends Component {
	render() {
		return (
			<section className="musicSection" id="music">
				<div className="musicHeaderContainer">
					<h2 className="musicHeader">The{'  '}Music</h2>
					<h2 className="musicHeaderBackground" id="musicBackground1">
						The{'  '}Music
					</h2>
					<h2 className="musicHeaderBackground" id="musicBackground2">
						The{'  '}Music
					</h2>
					<h2 className="musicHeaderBackground" id="musicBackground3">
						The{'  '}Music
					</h2>
					<h2 className="musicHeaderBackground" id="musicBackground4">
						The{'  '}Music
					</h2>
					<h2 className="musicHeaderBackground" id="musicBackground5">
						The{'  '}Music
					</h2>
				</div>

				<div className="musicContentsContainer">
					<MusicCard
						title="Example"
						artist="Bob Seger"
						link={require('../../assets/albums/bobseger.jpg')}
					/>
					<MusicCard
						title="Example"
						artist="Downchild Blues Band"
						link={require('../../assets/albums/downchild.jpg')}
					/>
					<MusicCard
						title="Example"
						artist="Fleetwood Mac"
						link={require('../../assets/albums/fleetwood.jpg')}
					/>
					<MusicCard
						title="Example"
						artist="The Rolling Stones"
						link={require('../../assets/albums/rollingstones.jpg')}
					/>
					<MusicCard
						title="Example"
						artist="The Beatles"
						link={require('../../assets/albums/beatles.jpg')}
					/>
					<MusicCard
						title="Example"
						artist="Shocking Blue"
						link={require('../../assets/albums/shockingblue.jpg')}
					/>
					<MusicCard
						title="Example"
						artist="Spencer Davis"
						link={require('../../assets/albums/spencerdavis.jpg')}
						className="hiddenMusicCard"
					/>
					<MusicCard
						title="Example"
						artist="The Eagles"
						link={require('../../assets/albums/eagles.jpg')}
						className="hiddenMusicCard"
					/>
					<MusicCard
						title="Example"
						artist="Steppenwolf"
						link={require('../../assets/albums/steppenwolf.jpg')}
						className="hiddenMusicCard"
					/>
					<MusicCard
						title="Example"
						artist="Smashmouth"
						link={require('../../assets/albums/smashmouth.jpg')}
						className="hiddenMusicCard"
					/>
					<MusicCard
						title="Example"
						artist="The Kinks"
						link={require('../../assets/albums/thekinks.jpg')}
						className="hiddenMusicCard"
					/>
					<MusicCard
						title="Example"
						artist="Herman's Kermits"
						link={require('../../assets/albums/hermanskermits.jpg')}
						className="hiddenMusicCard"
					/>
				</div>
				<Deco1 />
				<Deco2 />
			</section>
		);
	}
}

export default Music;
