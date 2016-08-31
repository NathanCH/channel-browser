import React, { Component } from 'react';

import './NoResults.scss';

class NoResults extends Component {
	render() {
		return(
			<div className="NoResults">
				<span className="NoResults__text">
					{this.props.text}
				</span>
			</div>
		);
	}
}

NoResults.propTypes = { text: React.PropTypes.string };
NoResults.defaultProps = { text: [] };

export default NoResults;