import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../redux/comment'
import ReplyComment from './ReplyComment'

const Comment = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment)
    const [commentValue, setCommentValule] = useState('')
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        setCommentValule(text)
        let data = {
            content: text,
            writer: 'jamong',
            postId: '123123'
        }
        dispatch(addComment(data))
        setText('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea
                    onChange={(e) => { setText(e.target.value) }}
                    placeholder="댓글"
                    value={text}
                />
                <button type='submit'>제출</button>
            </form>
            {comments.map((comment, index) => (
                <>
                    <div key={index}>{comment.content}</div>
                    <ReplyComment />
                </>))}
        </div>

    )
}

export default Comment
