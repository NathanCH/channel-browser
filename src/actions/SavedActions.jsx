import dispatcher from '../dispatcher';

export function saveChannel(id) {
	dispatcher.dispatch({
		type: 'SAVE_CHANNEL',
		id: id
	});
}

export function unsaveChannel(id) {
	dispatcher.dispatch({
		type: 'UNSAVE_CHANNEL',
		id: id
	});
}