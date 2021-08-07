import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  > h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  * {
    margin: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  .tag {
    margin-right: 0.5rem;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: ${palette.gray[2]};
    border-radius: 5px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Content = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트 입니다.</PostViewerBlock>;
    }
    return <PostViewer>오류 발생</PostViewer>;
  }
  if (loading || !post) {
    return null;
  }
  const { title, body, user, tags, publishedDate } = post;
  return (
    <PostViewerBlock>
      <h1>{title}</h1>
      <Info>
        <Tags>
          {tags.map((tag) => (
            <div className="tag">#{tag}</div>
          ))}
        </Tags>
        <span>{new Date(publishedDate).toLocaleDateString()}</span>
      </Info>
      <hr />
      <Content>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Content>
    </PostViewerBlock>
  );
};

export default PostViewer;
