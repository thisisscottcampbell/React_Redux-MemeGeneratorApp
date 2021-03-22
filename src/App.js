import React, { useState } from 'react';
import MemeCard from './components/MemeCard';
import MyMemes from './components/MyMemes';
import useInput from './hooks/useInput';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const App = ({ memes }) => {
	const [limit, setLimit] = useState(10);
	const [topText, setTop, resetTop] = useInput('');
	const [bottomText, setBottom, resetBottom] = useInput('');

	const handleClick = () => setLimit(limit + 10);
	const listMemes = memes
		.slice(0, limit)
		.map((meme, i) => (
			<MemeCard topText={topText} bottomText={bottomText} key={i} meme={meme} />
		));
	return (
		<div>
			<MyMemes />
			<h1>
				<u>MemeGenerator!!!</u>
			</h1>
			<h4>
				<i>write some text</i>
			</h4>
			<form>
				<div class="form-group row">
					<label for="top" class="col-sm-2 col-form-label">
						Top
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							class="form-control"
							placeholder="top..."
							onChange={setTop}
						/>
					</div>
				</div>
				<div class="form-group row">
					<label for="bottom" class="col-sm-2 col-form-label">
						Bottom
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							class="form-control"
							placeholder="bottom..."
							onChange={setBottom}
						/>
					</div>
				</div>
			</form>
			<div>{listMemes}</div>
			<button className="meme-button" onClick={handleClick}>
				More Memes!
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { memes: state.memes, myMemes: state.myMemes };
};
export default connect(mapStateToProps, null)(App);
