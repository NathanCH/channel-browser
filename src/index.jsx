import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes.jsx';
import './index.scss';

ReactDOM.render(
	<Router history={hashHistory} routes={routes} />,
	document.getElementById('app')
);