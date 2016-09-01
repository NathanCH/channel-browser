import React, { Component } from 'react';

import './Page.scss';

import ChannelStore from '../stores/ChannelStore.jsx';
import ContentSection from '../component/ContentSection.jsx';
import Scrollable from '../component/Scrollable.jsx';

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
				<ContentSection title="Home">
					<Scrollable label="Channels" items={this.state.channels} />
				</ContentSection>
			</div>
		)
	}
}

export default Home;