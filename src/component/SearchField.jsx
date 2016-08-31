import React, { Component } from 'react';

import './SearchField.scss';

class SearchField extends Component {
	constructor() {
		super();
		this.onSearch = this.onSearch.bind(this);
	}
	onSearch() {
		this.props.onSearch(this.refs.searchField.value);
	}
	render() {
		return(
			<div className="SearchField">
				<label className="SearchField__input">
					<input className="SearchField__input" 
						   type="text"
						   ref="searchField"
						   placeholder="Search"
						   onChange={this.onSearch} 
						   value={this.props.query} />
				</label>
			</div>
		)
	}
}

SearchField.propTypes = { query: React.PropTypes.string };
SearchField.defaultProps = { query: '' };

export default SearchField;