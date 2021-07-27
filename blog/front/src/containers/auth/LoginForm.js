import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth'
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user'

// 로그인 화면(중요!)
const LoginForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    // useSelector: 상태 조회(redux의 state를 가져다 쓰기 위해서 사용)
    // auth reducer와 user reducer 2개에서 다음과 같이 4개의 상태를 가져온다.
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    // input 태그에 무언가 입력했을 때, 이벤트 발생
    // key에는 다음과 같은 값이 들어갈 수 있다. [username, password, passwordConfirm]
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        // form은 redux에서 login, register가 들어간 것이지만 여기서는
        // form: auth.login이기 때문에 다음과 같은 정보를 비구조화 할당한다.
        const { username, password } = form;
        dispatch(login({ username, password }))
    };

    useEffect(() => {
        // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
        dispatch(initializeForm('login'));
    }, [dispatch])

    // 컴포넌트가 update될 때(auth, authError, dispatch), 아래 작업들을 실행한다.
    useEffect(() => {
        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패');
            return;
        }

        if (auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch])

    useEffect(() => {
        if (user) {
            history.push('/');
        }
        // 새로고침해도 상태 정보가 날라가지 않도록, localStorage에 저장해둔다.
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
            console.log('localStorage is not working')
        }
    }, [history, user])

    return (
        <AuthForm
            type='login'
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    )
}

export default withRouter(LoginForm)
// 라우트가 아닌 컴포넌트에서 라우터에서 사용하는 객체 [location, match, history]를 사용하려면,
// withRouter 라는 HoC 를 사용해야 한다.
