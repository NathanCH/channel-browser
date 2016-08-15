import React, { Component } from 'react';
import './Header.scss';

class Header extends Component{
	handleClick() {
		this.props.onUpdate(true);
	}
	render() {
		return (
			<header className="Header">
				<button onClick={(e) => this.handleClick(e)} className="Header__button ion ion-navicon"></button>
			</header>
		)
	}
}

export default Header;