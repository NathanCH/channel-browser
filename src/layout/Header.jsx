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
			</header>
		)
	}
}

export default Header;