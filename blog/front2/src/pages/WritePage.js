// 포스트 작성 페이지
import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <WriteActionButtonsContainer />
      <EditorContainer />
      <TagBoxContainer />
    </Responsive>
  );
};

export default WritePage;
