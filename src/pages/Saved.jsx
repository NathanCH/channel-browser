import React, { Component } from 'react';

import './Page.scss';

import SavedStore from '../stores/SavedStore.jsx';
import ChannelStore from '../stores/ChannelStore.jsx';
import ContentSection from '../component/ContentSection.jsx';
import Grid from '../component/Grid.jsx';
import NoResults from '../component/NoResults.jsx';
import Footer from '../layout/Footer.jsx';

class Saved extends Component {
	constructor() {
		super();
		this.state = {
			saved: ChannelStore.getSaved()
		}
		this.getSaved = this.getSaved.bind(this);
	}
	componentWillMount() {
		SavedStore.on('change', this.getSaved);
	}
	componentWillUnmount() {
	 	SavedStore.removeListener('change', this.getSaved);
	}
	getSaved() {
		this.setState({
			saved: ChannelStore.getSaved()
		});
	}
	renderSavedResults() {
		if(!this.state.saved.length) {
			return (
				<NoResults text="No saved items." />
			);
		}
		
		return (
			<Grid items={this.state.saved} />
		);
	}
	render() {
		return(
			<div className="Page">
				<ContentSection title={this.props.route.title}>
					{this.renderSavedResults()}
				</ContentSection>
				<Footer />
			</div>
		);
	}
}

export default Saved;