import React from 'react'
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostBlock = styled(Responsive)`
margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const PostItemBlock = styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
&:first-child{
    padding-top: 0;
}
&+&{
    border-top: 1px solid gray;
}
h2{
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover{
        color: darkgray;
    }
}
p{
    margin-top: 2rem;
}
`;
const PostItem = () => {
    return (
        <PostItemBlock>
            <h2>제목</h2>
            <SubInfo username="username" publishedDate={new Date()} />
            <Tags tags={['태그1', '태그2', '태그3']} />
            <p>포스트 내용의 일부분..</p>
        </PostItemBlock>
    )
}
const PostList = () => {
    return (
        <PostItemBlock>
            <WritePostButtonWrapper>
                <Button cyan to="/write">
                    새 글 작성하기
                </Button>
            </WritePostButtonWrapper>
            <div>
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </PostItemBlock>
    )
}

export default PostList
