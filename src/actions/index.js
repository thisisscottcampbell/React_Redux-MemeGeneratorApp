import { RECEIVE_MEMES, NEW_MEME } from './types';
import { username, password } from './secrets';
import memeAPI from '../api/memeAPI';

export const fetchMemes = () => async (dispatch) => {
	const response = await memeAPI.get('/get_memes');

	dispatch({ type: RECEIVE_MEMES, payload: response.data.data.memes });
};

export const createMeme = (memeData) => async (dispatch) => {
	const params = new URLSearchParams();
	params.append('username', username);
	params.append('password', password);

	const response = await memeAPI.post(`/caption_image`, memeData, {
		body: {
			params,
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	dispatch({ type: NEW_MEME, payload: response });
};
