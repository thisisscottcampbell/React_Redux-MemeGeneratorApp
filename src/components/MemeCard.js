import React, { useState } from 'react';

const MemeCard = ({ meme }) => {
	const [isHover, setHover] = useState(false);
	return (
		<div
			className="meme-card"
			onMouseOver={() => setHover(!isHover)}
			onMouseOut={() => setHover(!isHover)}
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

export default MemeCard;
