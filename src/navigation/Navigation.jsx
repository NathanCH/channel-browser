import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './Navigation.scss';

class Navigation extends Component{
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onNavigate();
	}
	render() {
		return (
			<ul className="Navigation">
				<li href="#" className="Navigation__item">
					<Link to="search" onClick={this.handleClick} className="Navigation__link">Search</Link>
				</li>
				<li href="#" className="Navigation__item">
					<Link to="home" onClick={this.handleClick} className="Navigation__link">Home</Link>
				</li>
				<li href="#" className="Navigation__item">
					<Link to="browse" onClick={this.handleClick} className="Navigation__link">Browse</Link>
				</li>
				<li href="#" className="Navigation__item">
					<Link to="saved" onClick={this.handleClick} className="Navigation__link">Saved</Link>
				</li>
			</ul>
		)
	}
}

export default Navigation;