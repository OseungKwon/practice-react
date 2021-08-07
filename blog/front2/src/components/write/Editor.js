import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  padding-top: 2rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[3]};
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
`;
const TextEditor = styled.div`
  min-height: 320px;
  font-size: 1.25rem;
`;

const Editor = ({ title, body, onChangeField }) => {
  // Quill을 적용할 DivElement 설정
  const quillElement = useRef(null);
  //Quill 인스턴스를 설정
  const quillInstance = useRef(null);

  useEffect(() => {
    // Quill 옵션 선택
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성해 주세요',
      modules: {
        toolbar: [[{ header: '1' }, { header: '2' }]],
      },
    });
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <TextEditor ref={quillElement} />
    </EditorBlock>
  );
};

export default Editor;
