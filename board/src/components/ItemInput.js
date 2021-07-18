import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertItem } from '../redux/items';

const ItemInput = () => {
    const dispatch = useDispatch();
    const onInsert = content => dispatch(insertItem(content));

    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onInsert(text);
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={text}
                placeholder="글 입력"
                onChange={onChange}
            />
            <button type="submit">확인</button>
        </form>
    )
}

export default ItemInput
