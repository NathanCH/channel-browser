import React, { Component } from 'react';

import './Table.scss';

class Table extends Component {
	render() {
		return(
			<table className="Table">
				<thead className="Table__header">
					<tr className="Table__row">
						<th className="Table__column--id">#</th>
						<th className="Table__column--action"></th>
						<th className="Table__column--name">Episode</th>
						<th className="Table__column--from Table--align-right">Show</th>
						<th className="Table--align-right">
							<i className="ion-calendar"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					{this.props.items.map((item, i) => {
						return(
							<tr className="Table__row">
								<td className="Table__column--id">{item.id}</td>
								<td className="Table__column--action">
									<i className="ion-plus-round"></i>
								</td>
								<td className="Table__column--name">
									{item.name}
									<div className="Table__column--mobile">
										{item.from}
									</div>
								</td>
								<td className="Table__column--from Table--align-right">{item.from}</td>
								<td className="Table--align-right">{item.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

Table.propTypes = { items: React.PropTypes.array };
Table.defaultProps = { items: [] };

export default Table;