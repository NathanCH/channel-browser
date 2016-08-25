import React, { Component } from 'react';
import './ContentSection.scss';

class ContentSection extends Component {
	render() {
		return(
			<div className="ContentSection">
				<h1 className="ContentSection__title">
					{this.props.title}
				</h1>
				<div className="ContentSection__items">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default ContentSection;