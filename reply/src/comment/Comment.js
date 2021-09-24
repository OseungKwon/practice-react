import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../redux/comment'
import ReplyComment from './ReplyComment'

const Comment = () => {

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
            responseTo: 'root'
        }
        dispatch(addComment(data))
        //localStorage.setItem('reply', JSON.stringify(data))
        //setLocal([...local, data])
        //console.log(local)


        setText('')
    }
    // useEffect(() => {
    //     localStorage.getItem('reply') && setLocal([...JSON.parse(localStorage.getItem('reply'))])
    //     console.log('a')
    // }, [])
    useEffect(() => {
        localStorage.setItem('reply', JSON.stringify(comments))
        setLocal(comments.filter(comment => comment.responseTo === 'root'))
    }, [comments])
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
            {local.map((comment, index) => (
                <>
                    <div key={index}>{comment.content}</div>
                    <ReplyComment responseTo={comment.content} />
                </>))}
        </div>

    )
}

export default Comment
