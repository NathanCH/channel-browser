import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import './App.scss';

import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import Navigation from '../navigation/Navigation.jsx';

class App extends Component{
	constructor() {
		super();
		this.state = {
			sidebarOpen: false,
			sidebarTransition: true
		};
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.closeSidebar = this.closeSidebar.bind(this);
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
	render() {
		var sidebarContent = <Navigation onNavigate={this.closeSidebar} />;
		return (		
			<Sidebar sidebar={sidebarContent}
			 		 open={this.state.sidebarOpen}
			 		 onSetOpen={this.toggleSidebar}
			 		 contentClassName="App"
			 		 sidebarClassName="App__sidebar"
			 		 transitions={this.state.sidebarTransition}>
				<Header onUpdate={this.toggleSidebar} />
				<div className="App__content">
					{this.props.children}
				</div>
				<Footer />
			</Sidebar>
		)
	}
}

export default App;