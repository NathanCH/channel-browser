import React, { Component } from 'react';

import './Page.scss';

import ChannelStore from '../stores/ChannelStore.jsx';
import * as ChannelActions from '../actions/ChannelActions.jsx';

import ContentSection from '../component/ContentSection.jsx';
import ScrollableList from '../component/ScrollableList.jsx';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			channels: ChannelStore.getAll()
		}
		this.getChannels = this.getChannels.bind(this);
	}
	componentWillMount() {
		ChannelStore.on('change', this.getChannels);
	}
	componentWillUnmount() {
	 	ChannelStore.removeListener('change', this.getChannels);    
	}
	getChannels() {
		this.setState({
			channels: ChannelStore.getAll()
		});
	}
	render() {
		return(
			<div className="Page">
				<ContentSection title="Just For You">
					<ScrollableList items={this.state.channels} />
				</ContentSection>
			</div>
		)
	}
}

export default Home;