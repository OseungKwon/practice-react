import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${palette.gray[1]};
  border-bottom: 1px solid black;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;
const Spacer = styled.div`
  height: 4rem;
`;
const UserInfo = styled.div`
  font-weight: 600;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            BLOG
          </Link>
          <div className="right">
            {user ? (
              <div className="right">
                <UserInfo>{user.username}</UserInfo>
                <Button onClick={onLogout}>로그아웃</Button>
              </div>
            ) : (
              <div className="right">
                <Button to="/login">로그인</Button>
              </div>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
