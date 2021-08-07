// 포스트들을 페이지네이션으로 볼 수 있는 페이지
import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
    </div>
  );
};

export default PostListPage;
