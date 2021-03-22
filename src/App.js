import React, { useState } from 'react';
import MemeCard from './components/MemeCard';
import { connect } from 'react-redux';

const App = ({ memes }) => {
	const [limit, setLimit] = useState(10);

	const handleClick = () => setLimit(limit + 10);
	const listMemes = memes
		.slice(0, limit)
		.map((meme, i) => <MemeCard key={i} meme={meme} />);
	return (
		<div>
			<h1>MemeGenerator!!!</h1>
			<div>{listMemes}</div>
			<button className="meme-button" onClick={handleClick}>
				More Memes!
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { memes: state.memes };
};
export default connect(mapStateToProps, null)(App);
