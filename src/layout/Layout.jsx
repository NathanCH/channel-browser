import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Layout.scss';

import Header from './Header.jsx';
import Navigation from '../navigation/Navigation.jsx';
import Sidebar from 'react-sidebar';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			sidebarOpen: false,
			sidebarDocked: false,
			sidebarTransition: false
		};
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.closeSidebar = this.closeSidebar.bind(this);
		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
	}
	toggleSidebar(state) {
		this.setState({
			sidebarOpen: state,
			sidebarTransition: true
		});
	}
	closeSidebar() {
		this.setState({
			sidebarOpen: false,
			sidebarTransition: false
		});
	}
	componentWillMount() {
		var mql = window.matchMedia('(min-width: 960px)');
		mql.addListener(this.mediaQueryChanged);
		this.setState({
			mql: mql,
			sidebarDocked: mql.matches
		});
	}
	mediaQueryChanged() {
		this.setState({
			sidebarDocked: this.state.mql.matches
		});
	}
	render() {
		var sidebarContent = <Navigation onNavigate={this.closeSidebar} />;
		var styles = {
			sidebar: {
				transition: 'transform .2s ease-out',
    			WebkitTransition: '-webkit-transform .2s ease-out',
			},
			content: {
				transition: 'left .2s ease-out, right .2s ease-out',
			}
		};


		return (		
			<Sidebar sidebar={sidebarContent}
			 		 open={this.state.sidebarOpen}
			 		 docked={this.state.sidebarDocked}
			 		 onSetOpen={this.toggleSidebar}
			 		 contentClassName="Layout"
			 		 sidebarClassName="Layout__sidebar"
			 		 transitions={this.state.sidebarTransition}
			 		 shadow={false}
			 		 styles={styles}>
				<Header onUpdate={this.toggleSidebar} title={this.props.title} />
				{this.props.children}
			</Sidebar>
		)
	}
}

export default Layout;