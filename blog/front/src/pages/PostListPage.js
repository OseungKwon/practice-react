import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PostList from '../components/posts/PostList';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
    return (
        <div>
            <HeaderContainer />
            <PostListContainer />
            <PaginationContainer />
        </div>
    )
}

export default PostListPage
