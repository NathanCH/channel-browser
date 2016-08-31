import React, { Component } from 'react';

import './Page.scss';

import ChannelStore from '../stores/ChannelStore.jsx';
import ContentSection from '../component/ContentSection.jsx';
import Grid from '../component/Grid.jsx';

class Browse extends Component {
	constructor() {
		super();
		this.state = {
			channels: ChannelStore.getAll()
		}
	}
	render() {
		return(
			<div className="Page">
				<ContentSection title="Browse">
					<Grid items={this.state.channels} />
				</ContentSection>
			</div>
		)
	}
}

export default Browse;