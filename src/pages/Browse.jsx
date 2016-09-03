import React, { Component } from 'react';

import './Page.scss';

import ChannelStore from '../stores/ChannelStore.jsx';
import ContentSection from '../component/ContentSection.jsx';
import Grid from '../component/Grid.jsx';
import Footer from '../layout/Footer.jsx';

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
				<ContentSection title={this.props.route.title}>
					<Grid items={this.state.channels} />
				</ContentSection>
				<Footer />
			</div>
		)
	}
}

export default Browse;