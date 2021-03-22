import React, { useState } from 'react';
import { connect } from 'react-redux';

const App = ({ memes }) => {
	const [limit, setLimit] = useState(10);

	const listMemes = memes
		.slice(0, limit)
		.map((meme, i) => <h4 key={i}>{meme.name}</h4>);
	return (
		<div>
			<h3>MemeGenerator!!!</h3>
			<div>{listMemes}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { memes: state.memes };
};
export default connect(mapStateToProps, null)(App);
