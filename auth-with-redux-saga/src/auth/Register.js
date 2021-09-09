import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postData, postDataSuccess, postDataFailure } from './authSlice';
import axios from 'axios';

const Register = () => {
	const dispatch = useDispatch();
	const [ form, setForm ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
	});
	const { name, email, password, passwordConfirm } = form;

	const onChange = (e) => {
		const nextForm = {
			...form,
			[e.target.id]: e.target.value
		};
		setForm(nextForm);
	};
	const onSubmit = (e) => {
		e.preventDefault();

		let data = {
			name,
			lastName: 'user',
			email,
			password,
			passwordConfirm
		};
		//console.log('data', data);

		dispatch(postDataSuccess(data));
	};
	const user = useSelector((state) => state.users);
	//console.log(form);
	console.log('user', user);
	useEffect(() => {
		dispatch(postData());
	}, dispatch);
	return (
		<form onSubmit={onSubmit}>
			<div>
				<span>이름</span>
				<input type="text" placeholder="이름" id="name" onChange={onChange} />
			</div>
			<div>
				<span>이메일</span>
				<input type="text" placeholder="이메일" id="email" onChange={onChange} />
			</div>
			<div>
				<span>비밀번호</span>
				<input type="password" placeholder="비밀번호" id="password" onChange={onChange} />
			</div>
			<div>
				<span>비밀번호 확인</span>
				<input type="password" placeholder="비밀번호 확인" id="passwordConfirm" onChange={onChange} />
			</div>
			<button type="submit">계정 만들기</button>
		</form>
	);
};

export default Register;
