import { RECEIVE_MEMES } from './types';

import memeAPI from '../api/memeAPI';

export const fetchMemes = async () => {
	const response = await memeAPI.get();

	dispatch({ type: RECEIVE_MEMES, payload: response });
};
