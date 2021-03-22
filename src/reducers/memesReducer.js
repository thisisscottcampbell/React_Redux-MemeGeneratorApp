import { RECEIVE_MEMES } from '../actions/types';

const memesReducer = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_MEMES:
			return action.payload;
		default:
			return state;
	}
};

export default memesReducer;
