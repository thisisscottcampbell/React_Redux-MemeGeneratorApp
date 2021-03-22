import { RECEIVE_MEMES, NEW_MEME } from './types';
import memeAPI from '../api/memeAPI';

export const fetchMemes = () => async (dispatch) => {
	const response = await memeAPI.get('/get_memes');

	dispatch({ type: RECEIVE_MEMES, payload: response.data.data.memes });
};

export const newMeme = (meme) => {
	return {
		type: NEW_MEME,
		payload: meme,
	};
};
