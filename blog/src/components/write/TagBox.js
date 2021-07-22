import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components';

const TagBoxBlock = styled.div`
width: 100%;
border-top: 1px solid gray;
padding-top: 2rem;
h4{
    color: white;
    margin-top: 0;
    margin-bottom: 0.5rem;
}
`;


const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid black; /* 스타일 초기화 */
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: gray;
    color: white;
    font-weight: bold;
    &:hover {
      background: black;
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: green;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag }) => (
    <Tag>#{tag}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} />
        ))}
    </TagListBlock>
));

const TagBox = () => {
    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm>
                <input
                    placeholder="태그를 입력하세요"
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={['태그1', '태그2', '태그3']} />
        </TagBoxBlock>
    );
};

export default TagBox;
