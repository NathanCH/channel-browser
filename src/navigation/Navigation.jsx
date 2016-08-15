import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import './Navigation.scss';

class Navigation extends Component{
	handleClick() {
		this.props.onNavigate();
	}
	render() {
		return (
			<ul className="Navigation">
				<li href="#" className="Navigation__item">
					<Link to="search" onClick={(e) => this.handleClick(e)} className="Navigation__link">Search</Link>
				</li>
				<li href="#" className="Navigation__item">
					<Link to="home" onClick={(e) => this.handleClick(e)} className="Navigation__link">Home</Link>
				</li>
				<li href="#" className="Navigation__item">
					<Link to="browse" onClick={(e) => this.handleClick(e)} className="Navigation__link">Browse</Link>
				</li>
				<li href="#" className="Navigation__item">
					<Link to="channels" onClick={(e) => this.handleClick(e)} className="Navigation__link">My Channels</Link>
				</li>
			</ul>
		)
	}
}

export default Navigation;