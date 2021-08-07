// 이렇게 컴포넌트를 따로 만들어 css를 만들어주면, 코드를 보다 깔끔하게 짤 수 있다.
// <StyledButton> 태그를 쓰면 아래의 스타일이 그대로 적용된다는 뜻.
import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
// 팔레트에서 만들어 둔 색 ${}로 가져옴
// StyledButton과 hover가 동시에 일어날 때, 아래 코드를 실행
const buttonStyled = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.gray[6]};
      &:hover {
        background: ${palette.gray[4]};
      }
    `};
`;
const StyledButton = styled.button`
  ${buttonStyled}
`;
const StyledLink = styled(Link)`
  ${buttonStyled}
`;
// <Button to="login">과 같은 형식으로 링크를 사용하는데,
// props.to가 존재하면(ex login) Link태그를 선택한다.
// props.cyan ? 1: 0 사용이유: 임의 props를 필터링 해주기 위해서
const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
