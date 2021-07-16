import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm, register } from '../redux/auth'
import AuthForm from './AuthForm'
const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError
    }));
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(register({ username, password }))
    }

    // 컴포넌트가 처음 렌더링 될 떄 form를 초기화한다.
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if (auth) {
            console.log('로그인 성공');
            console.log(auth);
        }
    }, [auth, authError])
    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
    )
}

export default RegisterForm
