import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertItem } from '../redux/items';
import axios from 'axios';

const ItemInput = () => {
    const dispatch = useDispatch();
    const onInsert = (id, content) => dispatch(insertItem(id, content));

    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = async e => {
        e.preventDefault();
        let data = {
            content: text
        }
        axios.post('/items', data)
            .then(response => {
                onInsert(response.data.id, text)
            })
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
