import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../redux'

const Comments = ({ fetchComments, loading, comments }) => {
    useEffect(() => {
        fetchComments()
    }, [fetchComments])
    const commentsItems = loading ? (<div>is loading...</div>) : (
        comments && comments.map(comment => (
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        ))
    )
    return (
        <div className="comments">
            {commentsItems}
        </div>
    )
}

const mapStateToProps = ({ comments }) => {
    return {
        comments: comments.items
    }
}
const mapDispatchToProps = {
    fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
