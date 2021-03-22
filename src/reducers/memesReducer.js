import { RECEIVE_MEMES, NEW_MEME } from '../actions/types';

export const apiMemesReducer = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_MEMES:
			return action.payload;
		default:
			return state;
	}
};

export const myMemesReducer = (state = [], action) => {
	console.log(action);
	switch (action.type) {
		case NEW_MEME:
			return [...state, action.meme];
		default:
			return state;
	}
};
