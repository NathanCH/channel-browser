import React, { Component } from 'react';

import './Page.scss';

import Table from '../component/Table.jsx';
import ChannelStore from '../stores/ChannelStore.jsx';
import ChannelSection from '../component/ChannelSection.jsx';
import Footer from '../layout/Footer.jsx';

class Channel extends Component {
	constructor(props) {
		super(props);
		this.channelId = Number(this.props.params.id);
		this.state = {
			meta: ChannelStore.getById(this.channelId),
			episodes: [
				{ id: 1, name: 'Margin of Error', from: 'The Wire', date: 'Oct 15, 2008' },
				{ id: 2, name: 'Everyones Waiting', from: 'Six Feet Under', date: 'Nov 7, 2005' },
				{ id: 3, name: 'Live Eviction and HOH', from: 'Big Brother 16', date: 'Aug 30, 2016' },
				{ id: 4, name: 'Trump Or Clinton? ', from: 'Secular Talk', date: 'Jan 25, 2016' },
				{ id: 5, name: 'The Resturuant ', from: 'Curb Your Enthusiasm', date: 'Sept 12, 2008' }
			]
		}
	}
	render() {
		return(
			<div className="Page">
				<ChannelSection id={this.state.meta.id} title={this.state.meta.name} thumb={this.state.meta.thumb}>
					<Table items={this.state.episodes} />
				</ChannelSection>
				<Footer />
			</div>
		)
	}
}

export default Channel;