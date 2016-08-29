import React, { Component } from 'react';
import './Scrollable.scss';

import Stepper from '../navigation/Stepper.jsx';
import Thumbnail from './Thumbnail.jsx';

class Scrollable extends Component {
	constructor() {
		super();
		this.state = { index: 0 };
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
	}
	componentDidMount() {
		window.addEventListener('resize', this.componentDidUpdate);
	}
	componentDidUpdate() {
		var items = this.getItems();
		var moveDistance = this.moveDistance();
		for (var i = 0; i < items.length; i++) {
			items[i].style.left = '-' + moveDistance + 'px';
		}
	}
	maxIncrement() {
		return this.lastItemPosition() >= this.props.items.length - this.remainder();
	}
	minDecrement() {
		return this.state.index === 0;
	}
	moveDistance() {
		return this.state.index * this.getItemWidth();
	}
	remainder() {
		return this.props.items.length % this.countVisibleItems();
	}
	lastItemPosition() {
		return this.state.index + this.countVisibleItems();
	}
	countVisibleItems() {
		return Math.round(this.getContainerWidth() / this.getItemWidth());
	}
	getContainerWidth() {
		return this.refs.container.offsetWidth;
	}
	getItems() {
		var items = [];
		for(var i = 0; i < this.props.items.length; i++) {
			items.push(this.refs['item-'+i]);
		}
		return items;
	}
	getItemWidth() {
		return this.getItems()[0].offsetWidth + 10;
	}
	handleIncrement() {
		if(this.maxIncrement()) return false;
		this.setState({
			index: this.state.index + this.countVisibleItems()
		});
	}
	handleDecrement() {
		if(this.minDecrement()) return false;
		this.setState({
			index: this.state.index - this.countVisibleItems()
		});
	}
	render() {
		return(
			<div className="Scrollable" ref="container">
				<div className="Scrollable__header">
					<h2 className="Scrollable__label">
						{this.props.label}
					</h2>
					<div className="Scrollable__navigation">
						<Stepper onIncrement={this.handleIncrement} 
								 onDecrement={this.handleDecrement} 
						/>
					</div>
				</div>
				<ul className="Scrollable__list">
					{this.props.items.map((item, i) => {
						return(
							<li className="Scrollable__list-item" ref={'item-'+i}>
								<Thumbnail 
									title={item.name}
									text={item.from}
									src={item.thumb}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

Scrollable.propTypes = { 
	label: React.PropTypes.string,
	items: React.PropTypes.array
};

Scrollable.defaultProps = { label: '', items: [] };

export default Scrollable;