import React, { useCallback, useEffect } from 'react'
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, initialState } from '../../modules/write';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body
    }))
    const onChangeField = useCallback(payload =>
        dispatch(changeField(payload)),
        [dispatch]
    )
    useEffect(() => {
        dispatch(initialize())
    }, [dispatch])

    return (
        <Editor onChangeField={onChangeField} title={title} body={body} />
    )
}

export default EditorContainer
