import React, { Component } from 'react';
import './ScrollableList.scss';

import Thumbnail from './Thumbnail.jsx';

class ScrollableList extends Component {
	render() {
		return(
			<ul className="ScrollableList">
				<li className="ScrollableList__item">
					<Thumbnail />
				</li>
				<li className="ScrollableList__item">
					<Thumbnail />
				</li>
			</ul>
		)
	}
}

export default ScrollableList;