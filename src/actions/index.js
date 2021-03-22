import { RECEIVE_MEMES } from './types';
import memeAPI from '../api/memeAPI';

export const fetchMemes = () => async (dispatch) => {
	const response = await memeAPI.get('/get_memes');

	dispatch({ type: RECEIVE_MEMES, payload: response.data.data.memes });
};
