import React, { Component } from 'react';

import './Page.scss';

import ContentSection from '../component/ContentSection.jsx';
import ScrollableList from '../component/ScrollableList.jsx';
import ChannelStore from '../stores/ChannelStore.jsx';

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
				<ContentSection title="Just For You">
					<ScrollableList />
				</ContentSection>
			</div>
		)
	}
}

export default Home;