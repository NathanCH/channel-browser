import React, { Component } from 'react';

import './Stepper.scss';

class Stepper extends Component {
	constructor() {
		super();
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment() {
		this.props.onIncrement(); 
	}
	decrement() {
		this.props.onDecrement(); 
	}
	render() {
		return(
			<ul className="Stepper">
				<li className="Stepper__item">
					<span className="Stepper__button" onClick={this.decrement}>
						<i className="ion ion-chevron-left"></i>
					</span>
				</li>
				<li className="Stepper__item">
					<span className="Stepper__button" onClick={this.increment}>
						<i className="ion ion-chevron-right"></i>
					</span>
				</li>
			</ul>
		)
	}
}

export default Stepper;