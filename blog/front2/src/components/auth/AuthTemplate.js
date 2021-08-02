// AuthForm과 달리 단순히 레이아웃(css)을 담당하는 컴포넌트

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

// 회원 인증 전체 div
const AuthTemplateBlock = styled.div`
  position: absolute;
  // 상하좌우 값을 모두 0으로 주어 전체 화면 채움
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.gray[1]};
`;

//  정가운데에 있는 로그인/회원가입 box
const WhiteBox = styled.div`
  // 로고, 현재는 blog로 되어있음
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    padding-bottom: 3rem;
    font-weight: bold;
    font-size: 2rem;
  }
  width: 400px;
  background: white;
  padding: 4rem;
  border: 1px solid gray;
  border-radius: 10px;
`;

// 하위 컴포넌트로 감싸여진 값이 props.children의 값으로 들어가게 된다.
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">Blog</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
