import React, { Component } from 'react';
import './ContentSection.scss';

class ContentSection extends Component {
	render() {
		return(
			<div className="ContentSection">
				<div className="ContentSection__title">
					{this.props.title}
				</div>
				<div className="ContentSection__items">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default ContentSection;