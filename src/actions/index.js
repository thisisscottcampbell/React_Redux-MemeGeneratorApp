import { RECEIVE_MEMES, NEW_MEME } from './types';
import { username, password } from './secrets';
import memeAPI from '../api/memeAPI';

export const fetchMemes = () => async (dispatch) => {
	const response = await memeAPI.get('/get_memes');

	dispatch({ type: RECEIVE_MEMES, payload: response.data.data.memes });
};

export const createMeme = (memeData) => async (dispatch) => {
	const { template_id, text0, text1 } = memeData;
	const data = { template_id, text0, text1, username, password };

	console.log(data);

	const encodeData = Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');

	console.log('encodeData', encodeData);

	const response = await memeAPI.post(`/caption_image`, {
		body: {
			encodeData,
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	console.log('response:', response.data);
	//console.log(response.data);

	dispatch({ type: NEW_MEME, payload: response });
};
