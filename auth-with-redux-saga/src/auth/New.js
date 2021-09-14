import React, { useEffect, useState } from 'react';
import axios from 'axios';

const New = () => {
	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	const start = async () => {
		const rget = await axios.get('http://localhost:5000/api/users/auth');
		console.log('r', rget);
	};
	start();

	return (
		<div>
			<input onChange={onChange} />
			<p>{text}</p>
		</div>
	);
};

export default New;
