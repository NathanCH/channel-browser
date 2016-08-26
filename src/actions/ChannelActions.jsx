import dispatcher from '../dispatcher';

export function createChannel(channel) {
	dispatcher.dispatch({
		type: 'CREATE_CHANNEL',
		text: channel
	});
}

export function reloadChannels() {
	dispatcher.dispatch({
		type: 'FETCH_CHANNELS'
	});

	// Ajax... on response
	// dispatcher.dispatch({ type: 'RECEIVE_CHANNELS' })
	// ...on error
	// dispatcher.dispatch({ type: 'FETCH_CHANNELS_ERROR' })
}