import React, { Component } from 'react';
import './ContentSection.scss';

class ContentSection extends Component {
	render() {
		return(
			<div className="ContentSection">
				<header className="ContentSection__header">
					<div className="ContentSection__title">
						{this.props.title}
					</div>
					<ul className="ContentSection__control">
						<li className="ContentSection__control-item">
							<a className="Button" href="#">Prev</a>
						</li>
						<li className="ContentSection__control-item">
							<a className="Button" href="#">Next</a>
						</li>
					</ul>
				</header>
				<div className="ContentSection__items">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default ContentSection;