import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import comment, { addComment } from '../redux/comment'

const ReplyComment = () => {
    const [commentValue, setCommentValule] = useState([])
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        let data = {
            content: text
        }
        const nextData = commentValue
        nextData.push(data)
        setCommentValule(nextData);
        setText('')
    }
    console.log(commentValue)
    return (
        <div style={{ marginLeft: "3rem" }} >
            <form onSubmit={onSubmit}>
                <textarea
                    onChange={(e) => { setText(e.target.value) }}
                    placeholder="댓글"
                    value={text}
                />
                <button type='submit'>제출</button>
            </form>
            {commentValue.map(a => (
                <>
                    <div>{a.content}</div>
                    <ReplyComment />
                </>))}
        </div>
    )
}

export default ReplyComment
