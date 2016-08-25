import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/App.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Browse from './pages/Browse.jsx';
import Channels from './pages/Channels.jsx';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="home" component={Home} />
		<Route path="search" component={Search} />
		<Route path="browse" component={Browse} />
		<Route path="channels" component={Channels} />
	</Route>
);

export default routes;