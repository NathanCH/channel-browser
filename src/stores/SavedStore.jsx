import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class SavedStore extends EventEmitter {
	constructor() {
		super();
		this.saved = [
			{ type: 'channel', id: 2 },
			{ type: 'channel', id: 4 }
		];
	}
	getAll() {
		return this.saved;
	}
	saveChannel(id) {
		this.saved.push({
			type: 'channel',
			id: id
		});
		this.emit('change');
	}
	saveSeries(id) {
		this.saved.push({
			type: 'series',
			id: id
		});
		this.emit('change');
	}
	handler(action) {
		switch(action.type) {
			case 'SAVE_CHANNEL':
				this.saveChannel(action.id);
			break;
			case 'SAVE_SERIES':
				this.saveSeries(action.id);
			break;
		}
	}
}

const savedStore = new SavedStore();

dispatcher.register(savedStore.handler.bind(savedStore));

export default savedStore;