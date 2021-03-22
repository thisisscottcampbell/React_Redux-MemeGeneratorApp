import React from 'react';
import { connect } from 'react-redux';

const MyMemes = ({ memes }) => {
	console.log(memes);

	const memeList = memes.map((meme, i) => {
		return (
			<img key={i} src={meme.data.url} alt="my-meme" className="my-meme-img" />
		);
	});
	return <div>{memeList}</div>;
};

const mapStateToProps = (state) => {
	return { memes: state.myMemes };
};

export default MyMemes;
