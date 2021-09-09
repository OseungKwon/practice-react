import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postData, postDataSuccess, postDataFailure } from "./loginSlice";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const { email, password } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.id]: e.target.value
    };
    setForm(nextForm);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email,
      password
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        data
      );
      console.log(res.data);
      if (res.data.loginSuccess) {
        console.log("success", res.data.userId, typeof res.data.userId);
        dispatch(postDataSuccess(res.data.userId));
      } else {
        dispatch(postDataFailure(res.data.message));
      }
    } catch (error) {
      dispatch(postDataFailure(error));
      alert(error);
    }
  };
  useEffect(() => {
    dispatch(postData());
  }, [dispatch]);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>이메일</span>
        <input
          type="text"
          placeholder="이메일"
          id="email"
          onChange={onChange}
        />
      </div>
      <div>
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호"
          id="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
