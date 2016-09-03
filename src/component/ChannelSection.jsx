import React, { Component } from 'react';

import './ChannelSection.scss';

import dispatcher from '../dispatcher.jsx';

import SavedStore from '../stores/SavedStore.jsx';
import ChannelStore from '../stores/ChannelStore.jsx';

class ChannelSection extends Component {
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
	isSaved() {
		return ChannelStore.isSaved(this.props.id);
	}
	renderSaveToggle() {
		if(this.isSaved()) {
			return(
				<div className="ChannelSection__button ChannelSection__button--saved" onClick={this.unsave}>
					Saved
				</div>
			);
		}
		return (
			<div className="ChannelSection__button" onClick={this.save}>
				Save
			</div>
		)
	}
	setSaved() {
		this.setState({
			saved: this.isSaved()
		});
	}
	render() {
		return(
			<div className="ChannelSection">
				<header className="ChannelSection__header">
					<div className="ChannelSection__graphic">
						<img className="ChannelSection__image" src={this.props.thumb} />
					</div>
					<div className="ChannelSection__meta">
						<h1 className="ChannelSection__title">
							{this.props.title}
						</h1>
						{this.renderSaveToggle()}
					</div>
				</header>
				<div className="ChannelSection__items">
					{this.props.children}
				</div>
			</div>
		)
	}
}

ChannelSection.propTypes = {
	id: React.PropTypes.id,
	title: React.PropTypes.string,
	thumb: React.PropTypes.string
};

ChannelSection.defaultProps = {
	id: null,
	title: '',
	thumb: ''
};

export default ChannelSection;