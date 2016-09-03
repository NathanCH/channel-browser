import React, { Component } from 'react';

import './Page.scss';

import ChannelStore from '../stores/ChannelStore.jsx';
import ContentSection from '../component/ContentSection.jsx';
import Scrollable from '../component/Scrollable.jsx';
import Footer from '../layout/Footer.jsx';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			channels: ChannelStore.getAll()
		}
	}
	render() {
		return(
			<div className="Page">
				<ContentSection title={this.props.route.title}>
					<Scrollable label="Latest Channels" items={this.state.channels} />
					<Scrollable label="Popular Now" items={this.state.channels} />
					<Scrollable label="More Channels" items={this.state.channels} />
				</ContentSection>
				<Footer />
			</div>
		)
	}
}

export default Home;