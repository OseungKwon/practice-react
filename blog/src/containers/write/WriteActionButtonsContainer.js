import React, { useEffect } from 'react'
import WriteActionButton from '../../components/write/WriteActionButton'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { writePost } from '../../lib/api/posts'
import { write } from 'ieee754'

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError
    }));

    const onPublish = () => {
        dispatch(
            writePost({
                title,
                body,
                tags
            })
        )
    }
    const onCancel = () => {
        history.goBack();
    };
    useEffect(() => {
        if (post) {
            const { _id, user } = post;
            history.pushState(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);
    return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />
}
export default withRouter(WriteActionButtonsContainer);
