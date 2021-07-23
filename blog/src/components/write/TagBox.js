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
const TagItem = React.memo(({ tag, onRemove, onChangeTags }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map(tag =>
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    )}
  </TagListBlock>
));

const TagBox = ({ onChangeTags, tags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    tag => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      const nextTages = [...localTags, tag];
      setLocalTags(nextTages);
      onChangeTags(nextTages);
    },
    [localTags, onChangeTags],
  );

  // 왜 삽입이고 삭제고 둘다 같은 onChangeTags를 쓰는 이유:
  // nextTags에는 각자 담긴게 다르다. 
  //  key가 tags이고, value는 nextTags가 들어가기에 filter로 해당(클릭한) 태그를 제거하고,
  // 나머지들을 nextTags에 넣어준다. 
  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag],
  );

  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;