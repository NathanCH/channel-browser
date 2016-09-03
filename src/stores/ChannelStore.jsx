import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

import SavedStore from './SavedStore.jsx';

class ChannelStore extends EventEmitter {
	constructor() {
		super();
		this.channels = [
			{ id: 1, name: 'Release Radar', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/4dCYrVw.png' },
			{ id: 2, name: 'Only Reality', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/wPlFYu2.png' },
			{ id: 3, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/jUThdQH.png' },
			{ id: 4, name: '90s Output', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/l4k6NA8.png' },
			{ id: 5, name: 'Brtish Panel Shows', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/XOTWLP9.png' },
			{ id: 6, name: 'Sports of Tomorrow', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/w6zYQ7u.png' },
			{ id: 7, name: 'Cartoons', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/b9fG2RL.png' },
			{ id: 8, name: 'Actually Music', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/Z5AbkRm.png' },
			{ id: 9, name: 'eSports 24/7', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/ArghOIy.png' },
			{ id: 10, name: 'New Channel', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/TZq05ge.png' },
			{ id: 11, name: 'Eat Sleep Fitness', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/lODBm9j.png' },
			{ id: 12, name: 'Depths of Youtube', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/KsJN6PS.png' },
			{ id: 13, name: 'Release Radar', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/IdNWRGO.png' },
			{ id: 14, name: 'Only Reality', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/poyF9cN.png' },
			{ id: 15, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://i.imgur.com/qM5huu3.png' }
		];
	}
	getById(id) {
		return this.channels.find(x => x.id === id);
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