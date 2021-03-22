import React, { useState } from 'react';
import { newMeme } from '../actions';
import { connect } from 'react-redux';

const MemeCard = ({ meme, topText, bottomText }) => {
	const [isHover, setHover] = useState(false);

	const handleClick = () => {
		console.log(topText, bottomText);
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

export default connect(null, { newMeme })(MemeCard);
