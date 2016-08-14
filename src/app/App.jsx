import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import './App.scss';

class App extends Component{
	render() {
		return (
			<div className="App">
				<Sidebar />
				<Header />
				<Footer />
			</div>
		)
	}
}

export default App;