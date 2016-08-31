import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

import SavedStore from './SavedStore.jsx';

class ChannelStore extends EventEmitter {
	constructor() {
		super();
		this.channels = [
			{ id: 1, name: 'Release Radar', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 2, name: 'Only Reality', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 3, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 4, name: '90s Output', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 5, name: 'Brtish Panel Shows', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 6, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 7, name: 'Cartoons', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 8, name: 'Actually Music', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' }
		];
	}
	getAll() {
		return this.channels;
	}
	getSaved() {
		var array = SavedStore.getAll();

		return array.map(item => {
			return this.channels.find(this.findChannel.bind(item));
		});
	}
	findChannel(channel) {
		return this.id === channel.id;
	}
}

const channelStore = new ChannelStore;

export default channelStore;