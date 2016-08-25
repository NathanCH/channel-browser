import React, { Component } from 'react';

import './App.scss';

import Layout from '../layout/Layout.jsx';

class App extends Component{
	render() {
		return (
			<div className="App">		
				<Layout>
					{this.props.children}
				</Layout>
			</div>
		)
	}
}

export default App;