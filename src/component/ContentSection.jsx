import React, { Component } from 'react';

import './ContentSection.scss';

class ContentSection extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div className="ContentSection">
				<header className="ContentSection__header">
					<h1 className="ContentSection__title">
						{this.props.title}
					</h1>
				</header>
				<div className="ContentSection__items">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default ContentSection;