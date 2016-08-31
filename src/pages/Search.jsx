import React, { Component } from 'react';

import './Page.scss';

import ChannelStore from '../stores/ChannelStore.jsx';
import ContentSection from '../component/ContentSection.jsx';
import SearchField from '../component/SearchField.jsx';
import Grid from '../component/Grid.jsx';
import NoResults from '../component/NoResults.jsx';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			query: '',
			channels: ChannelStore.getAll(),
			filteredResults: null
		}
		this.handleSearch =  this.handleSearch.bind(this);
	}
	handleSearch(query) {
		var results = [];
		this.state.channels.forEach(channel => {
			if(
				channel.name.toLowerCase().indexOf(query.toLowerCase()) != -1 ||
				channel.from.toLowerCase().indexOf(query.toLowerCase()) != -1 ||
				channel.type.toLowerCase().indexOf(query.toLowerCase()) != -1
			){
				results.push(channel);
			}
		});
		this.setState({
			query: query,
			filteredResults: results
		});
	}
	renderResults() {
		var gridItems = this.state.filteredResults || this.state.channels;

		if(!gridItems.length) {
			return (
				<NoResults text="No results found." />
			);
		}

		return (
			<Grid items={gridItems} />
		);
	}
	render() {
		return(
			<div className="Page">
				<ContentSection title="Search!">
					<SearchField onSearch={this.handleSearch} query={this.state.query} />
					{this.renderResults()}
				</ContentSection>
			</div>
		)
	}
}

export default Search;