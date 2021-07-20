import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { insertItem } from '../redux/items';
import axios from 'axios';

const ItemInput = ({ user }) => {
    const dispatch = useDispatch();
    const onInsert = (id, content) => dispatch(insertItem(id, content));
    const onfocus = useRef();
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = async e => {
        e.preventDefault();
        if (text === '') {
            return alert('내용을 입력하세요');
        }
        let data = {
            content: text,
            user: user.email
        }
        axios.post('/items', data)
            .then(response => {
                onInsert(response.data.id, text);
                onfocus.current.focus();
            })
        setText('');
    };

    return (
        <div className="ItemInput">
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="글 입력"
                    onChange={onChange}
                    ref={onfocus}
                />
                <button type="submit" className="InputButton">확인</button>
            </form>
        </div>
    )
}

export default ItemInput
