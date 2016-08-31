import React, { Component } from 'react';

import './Grid.scss';

import Thumbnail from './Thumbnail.jsx';

class Grid extends Component {
	render() {
		return(
			<div className="Grid">
				<div className="Grid__header">
					<h2 className="Grid__label">
						Results
					</h2>
				</div>
				<div className="Grid__list">
					{this.props.items.map((item, i) => {
						return(
							<div className="Grid__list-item">
								<Thumbnail
									id={item.id}
									title={item.name}
									text={item.from}
									src={item.thumb}
								/>
							</div>
						);
					})}
				</div>
			</div>
		)
	}
}

Grid.propTypes = { items: React.PropTypes.array };
Grid.defaultProps = { items: [] };

export default Grid;