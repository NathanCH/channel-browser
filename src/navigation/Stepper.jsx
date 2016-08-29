import React, { Component } from 'react';

import './Stepper.scss';

class Stepper extends Component {
	constructor(props) {
		super(props);
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
					<span className="Stepper__button" onClick={this.decrement}>Prev</span>
				</li>
				<li className="Stepper__item">
					<span className="Stepper__button" onClick={this.increment}>Next</span>
				</li>
			</ul>
		)
	}
}

export default Stepper;