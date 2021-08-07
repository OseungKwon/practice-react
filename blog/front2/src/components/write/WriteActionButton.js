import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: border 3rem;
  padding: 16px;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const WriteActionButton = ({ onCancle, onPublish }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton onClick={onPublish}>포스트 등록</StyledButton>
      <StyledButton onClick={onCancle}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
