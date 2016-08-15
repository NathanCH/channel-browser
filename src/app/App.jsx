import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import Navigation from '../navigation/Navigation.jsx';

import './App.scss';

class App extends Component{
	constructor() {
		super();
		this.state = {
			sidebarOpen: false,
			transitions: true
		}
	}

	toggleSidebar(state) {
		this.setState({
			sidebarOpen: state,
			transitions: true
		});
	}

	closeSidebar(state) {
		this.setState({
			sidebarOpen: false,
			transitions: false
		});
	}

	render() {
		var sidebarContent = <Navigation onNavigate={(e) => this.closeSidebar(e)} />;
		return (		
			<Sidebar sidebar={sidebarContent}
			 		 open={this.state.sidebarOpen}
			 		 onSetOpen={(e) => this.toggleSidebar(e)}
			 		 sidebarClassName="Sidebar"
			 		 contentClassName="App"
			 		 transitions={this.state.transitions}>
				<Header onUpdate={(e) => this.toggleSidebar(e)} />
				{this.props.children}
				<Footer />
			</Sidebar>	
		)
	}
}

export default App;