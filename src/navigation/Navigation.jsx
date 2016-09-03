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
			<div className="Navigation">
				<div className="Navigation__label">
					Main
				</div>
				<ul className="Navigation__list">
					<li href="#" className="Navigation__list-item">
						<Link to="search" onClick={this.handleClick} className="Navigation__link">
							<i className="ion ion-search"></i> Search
						</Link>
					</li>
					<li href="#" className="Navigation__list-item">
						<Link to="home" onClick={this.handleClick} className="Navigation__link">
							<i className="ion ion-home"></i> Home
						</Link>
					</li>
					<li href="#" className="Navigation__list-item">
						<Link to="browse" onClick={this.handleClick} className="Navigation__link">
							<i className="ion ion-filing"></i> Browse
						</Link>
					</li>
					<li href="#" className="Navigation__list-item">
						<Link to="saved" onClick={this.handleClick} className="Navigation__link">
							<i className="ion ion-android-favorite"></i> Saved
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Navigation;