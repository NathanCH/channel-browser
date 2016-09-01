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
			{ id: 6, name: 'Sports of Tomorrow', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 7, name: 'Cartoons', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 8, name: 'Actually Music', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 9, name: 'eSports 24/7', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 10, name: 'New Channel', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 11, name: 'Eat Sleep Fitness', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 12, name: 'Depths of Youtube', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 13, name: 'Release Radar', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 14, name: 'Only Reality', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 15, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' }
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
	isSaved(id) {
		var array = SavedStore.getAll();
		var saved = [];

		array.forEach(item => {
			return id === item.id ? saved.push(item) : false;
		});

		return saved.length;
	}
	findChannel(channel) {
		return this.id === channel.id;
	}
}

const channelStore = new ChannelStore;

export default channelStore;