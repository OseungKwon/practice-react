import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import comment, { addComment } from '../redux/comment'

const ReplyComment = ({ responseTo }) => {

    const [local, setLocal] = useState([])


    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment)
    // comments.push({ a: 'bb' })
    const [commentValue, setCommentValule] = useState('')
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        setCommentValule(text)
        let data = {
            content: text,
            writer: 'jamong',
            postId: '123123',
            responseTo: responseTo
        }
        dispatch(addComment(data))

        setText('')
    }

    useEffect(() => {
        localStorage.setItem('reply', JSON.stringify(comments))
        setLocal(comments.filter(comment => comment.responseTo === responseTo))
    }, [comments])
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
            {local.map(comment => <>
                <div>{comment.content}</div>
                <ReplyComment responseTo={comment.content} />
            </>
            )}
        </div>
    )
}

export default ReplyComment
