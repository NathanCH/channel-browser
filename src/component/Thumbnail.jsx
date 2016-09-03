import React, { Component } from 'react';
import { Link } from 'react-router';

import './Thumbnail.scss';

import dispatcher from '../dispatcher.jsx';

import SavedStore from '../stores/SavedStore.jsx';
import ChannelStore from '../stores/ChannelStore.jsx';

class Thumbnail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saved: this.isSaved()
		}
		this.save = this.save.bind(this);
		this.unsave = this.unsave.bind(this);
		this.setSaved = this.setSaved.bind(this);
	}
	componentDidMount() {
		SavedStore.setMaxListeners(0);
		SavedStore.on('change', this.setSaved);
	}
	componentWillUnmount() {
		SavedStore.removeListener('change', this.setSaved);
	}
	save() {
		dispatcher.dispatch({
			type: 'SAVE_CHANNEL',
			id: this.props.id
		});
	}
	unsave() {
		dispatcher.dispatch({
			type: 'UNSAVE_CHANNEL',
			id: this.props.id
		});
	}
	setSaved() {
		this.setState({
			saved: this.isSaved()
		});
	}
	isSaved() {
		return ChannelStore.isSaved(this.props.id);
	}
	renderSaveToggle() {
		if(this.isSaved()) {
			return(
				<div className="Thumbnail__button Thumbnail__button--saved" onClick={this.unsave}>
					<i className="ion ion-android-favorite"></i>
				</div>
			);
		}
		return (
			<div className="Thumbnail__button" onClick={this.save}>
				<i className="ion ion-android-favorite-outline"></i>
			</div>
		)
	}
	render() {
		return(
			<div className="Thumbnail">
				<div className="Thumbnail__container">
					<div className="Thumbnail__graphic">
						<Link to={`/channel/${this.props.id}`}>
							<img src={this.props.src} className="Thumbnail__image" />
						</Link>
						{this.renderSaveToggle()}
					</div>
					<div className="Thumbnail__content">
						<Link to={`/channel/${this.props.id}`} className="Thumbnail__title">
							{this.props.title}
						</Link>
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