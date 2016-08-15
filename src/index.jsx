import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Browse from './pages/Browse.jsx';
import Channels from './pages/Channels.jsx';
import App from './app/App.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="home" component={Home} />
			<Route path="search" component={Search} />
			<Route path="browse" component={Browse} />
			<Route path="channels" component={Channels} />
		</Route>
	</Router>,
	document.getElementById('app')
);