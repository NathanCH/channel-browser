import dispatcher from '../dispatcher';

export function saveChannel(id) {
	dispatcher.dispatch({
		type: 'SAVE_CHANNEL',
		id: id
	});
}

export function saveSeries(id) {
	dispatcher.dispatch({
		type: 'SAVE_SERIES',
		id: id
	});
}