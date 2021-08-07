// 포스트들을 페이지네이션으로 볼 수 있는 페이지
import React from 'react';
import PostList from '../components/posts/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostList />
    </div>
  );
};

export default PostListPage;
