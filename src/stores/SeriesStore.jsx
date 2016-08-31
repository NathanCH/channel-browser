import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class SeriesStore extends EventEmitter {
	constructor() {
		super();
		this.series = [
			{ id: 1, name: 'Big Brother 2', from: 'Only Reality', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 2, name: 'Curb Your Enthusiasm', from: 'Cerebral Comedy', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 3, name: 'Survivor', from: 'Only Reality', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 4, name: 'CNN LIVE', from: 'News and Events', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 5, name: 'Sienfeld', from: 'Cerebral Comedy', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 6, name: 'Extras', from: 'Cerebral Comedy', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 7, name: 'Six Feet Under', from: 'Dramatic Drama', type: 'series', thumb: 'http://placehold.it/130x130' }
		];
	}
	getAll() {
		return this.series;
	}
}

const seriesStore = new SeriesStore;

export default seriesStore;