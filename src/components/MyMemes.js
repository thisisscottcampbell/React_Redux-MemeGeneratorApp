import React from 'react';
import { connect } from 'react-redux';

const MyMemes = ({ myMemes }) => {
	//console.log(myMemes);

	if (!myMemes) return null;

	const memeList = myMemes.map((meme, i) => {
		return <img key={i} alt="" className="my-meme-img" />;
	});
	return <div>{memeList}</div>;
};

const mapStateToProps = (state) => {
	return { myMemes: state.myMemes };
};

export default connect(mapStateToProps, null)(MyMemes);
