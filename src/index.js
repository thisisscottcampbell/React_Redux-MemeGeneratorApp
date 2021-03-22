import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';
import { createStore } from 'react';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
);
