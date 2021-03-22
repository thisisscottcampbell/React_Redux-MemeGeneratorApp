export const RECEIVE_MEMES = 'RECEIVE_MEMES';

export const memes = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_MEMES:
			return action.memes;
		default:
			return state;
	}
};
