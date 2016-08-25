import { EventEmitter } from "events";

class ChannelStore extends EventEmitter {
	constructor() {
		super();
		this.channels = [
			{ id: 1, name: 'Release Radar', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 2, name: 'Big Brother 2', from: 'Only Reality', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 3, name: 'Only Reality', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 4, name: 'Sports Today', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' },
			{ id: 5, name: 'Curb Your Enthusiasm', from: 'Cerebral Comedy', type: 'series', thumb: 'http://placehold.it/130x130' },
			{ id: 6, name: '90s Output', from: 'Channel Browser', type: 'channel', thumb: 'http://placehold.it/130x130' }
		];
	}

	getAll() {
		return this.channels;
	}
}

const channelStore = new ChannelStore;

export default channelStore;