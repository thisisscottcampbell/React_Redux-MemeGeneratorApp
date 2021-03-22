import React, { useState } from 'react';
import { createMeme } from '../actions';
import { connect } from 'react-redux';

const MemeCard = ({ meme, topText, bottomText, createMeme }) => {
	const [isHover, setHover] = useState(false);

	//calls createMeme ac
	const handleClick = () => {
		const memeData = {
			text0: topText,
			text1: bottomText,
			template_id: meme.id,
		};

		createMeme(memeData);
	};

	return (
		<div
			className="meme-card"
			onMouseOver={() => setHover(!isHover)}
			onMouseOut={() => setHover(!isHover)}
			onClick={handleClick}
		>
			<img
				className={isHover ? 'meme-img darken-img' : 'meme-img'}
				src={meme.url}
				alt=""
			/>
			<h3 className={isHover ? 'meme-text' : 'no-text'}>{meme.name}</h3>
		</div>
	);
};

export default connect(null, { createMeme })(MemeCard);
