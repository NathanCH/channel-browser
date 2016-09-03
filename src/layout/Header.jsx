import React, { Component } from 'react';
import './Header.scss';

class Header extends Component{
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.props.onUpdate(e);
	}
	render() {
		return (
			<header className="Header">
				<button onClick={this.handleClick} className="Header__button ion-navicon"></button>
				<div className="Header__text">
					{this.props.title}
				</div>
			</header>
		)
	}
}

export default Header;