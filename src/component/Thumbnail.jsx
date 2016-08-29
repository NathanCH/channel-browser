import React, { Component } from 'react';
import './Thumbnail.scss';

class Thumbnail extends Component {
	render() {
		return(
			<div className="Thumbnail">
				<div className="Thumbnail__container">
					<img src={this.props.src} className="Thumbnail__image" />
					<div className="Thumbnail__content">
						<h2 className="Thumbnail__title">{this.props.title}</h2>
						<span className="Thumbnail__text">{this.props.text}</span>
					</div>
				</div>
			</div>
		)
	}
}

Thumbnail.propTypes = {
	title: React.PropTypes.string,
	text: React.PropTypes.string,
	src: React.PropTypes.string
};

Thumbnail.defaultProps = {
	title: '',
	text: '',
	src: 'http://placehold.it/150x150'
};

export default Thumbnail;