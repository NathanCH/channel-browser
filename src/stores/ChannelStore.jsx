import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class ChannelStore extends EventEmitter {
	constructor() {
		super();
		this.channels = [
			{ id: 1, name: 'Release Radar', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 2, name: 'Big Brother 2', from: 'Only Reality', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 3, name: 'Only Reality', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 4, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 5, name: 'Curb Your Enthusiasm', from: 'Cerebral Comedy', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 6, name: '90s Output', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 7, name: 'CNN LIVE', from: 'News and Events', type: 'stream', thumb: 'http://placehold.it/130x130' },
			{ id: 8, name: 'Brtish Panel Shows', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 9, name: 'Survivor', from: 'Only Reality', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 10, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
		];
	}
	createChannel(channel) {
		this.channels.push(channel);
		this.emit('change');
	}
	getAll() {
		return this.channels;
	}
	handler(action) {
		switch(action.type) {
			case 'CREATE_CHANNEL':
				this.createChannel(action.text);
			break;
		}
	}
}

const channelStore = new ChannelStore;

dispatcher.register(channelStore.handler.bind(channelStore));

export default channelStore;