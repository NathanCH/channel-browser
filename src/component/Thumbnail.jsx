import React, { Component } from 'react';
import './Thumbnail.scss';

class Thumbnail extends Component {
	render() {
		return(
			<div className="Thumbnail">
				<img src="http://placehold.it/130x130" className="Thumbnail__image" />
				<div className="Thumbnail__content">
					<h2 className="Thumbnail__title">Release Radar</h2>
					<span className="Thumbnail__text">Spotify Playlist</span>
				</div>
			</div>
		)
	}
}

export default Thumbnail;