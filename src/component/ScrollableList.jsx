import React, { Component } from 'react';
import './ScrollableList.scss';

import Thumbnail from './Thumbnail.jsx';

class ScrollableList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul className="ScrollableList">
				{this.props.items.map((item, key) => {
					return(
						<li className="ScrollableList__item">
							<Thumbnail 
								title={item.id}
								text={item.from}
								src={item.thumb}
							/>
						</li>
					);
				})}
			</ul>
		)
	}
}

export default ScrollableList;