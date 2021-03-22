import { combineReducers } from 'redux';
import { apiMemesReducer, myMemesReducer } from './memesReducer';

const rootReducer = combineReducers({
	memes: apiMemesReducer,
	myMemes: myMemesReducer,
});

export default rootReducer;
