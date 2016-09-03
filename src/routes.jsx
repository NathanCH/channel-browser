import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/App.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Browse from './pages/Browse.jsx';
import Saved from './pages/Saved.jsx';
import Channel from './pages/Channel.jsx';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="home" component={Home} title="Home" />
		<Route path="search" component={Search} title="Search" />
		<Route path="browse" component={Browse} title="Browse" />
		<Route path="saved" component={Saved} title="Saved" />
		<Route path="channel/:id" component={Channel} title="Channel" />
	</Route>
);

export default routes;