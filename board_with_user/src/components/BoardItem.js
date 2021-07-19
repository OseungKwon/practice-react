import React, { useState, useRef } from 'react'
import moment from 'moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../redux/items';
import axios from 'axios';
let date = moment().format('YYYY. MM. DD. HH:mm:ss');

const BoardItem = ({ id, content }) => {
    const dispatch = useDispatch();
    const [readOnly, setReadOnly] = useState(true);
    const [updateText, setUpdateText] = useState(content);
    const onfocus = useRef();

    const onChangeText = (e) => {
        const { value } = e.target;
        setUpdateText(value);

    }
    const editContent = async () => {
        setReadOnly(!readOnly)
        let data = {
            content: updateText
        }
        console.log(updateText);  //test
        axios.put(`/items/${id}`, data)
            .then(onfocus.current.focus())
    }
    const deleteContent = async () => {
        dispatch(removeItem(id))
        axios.delete(`/items/${id}`)
    }


    return (
        <div className="BoardItem">
            <div className="main">
                <div className="number">{id}</div>
                <input
                    name="content"
                    readOnly={readOnly}
                    defaultValue={content}
                    onChange={onChangeText}
                    onBlur={() => dispatch(updateItem(id, updateText))}
                    ref={onfocus}
                />
            </div>
            <div className="sub">
                <div className="date">{date}</div>
                <button onClick={editContent}>수정</button>
                <button onClick={deleteContent}>삭제</button>
            </div >

        </div >
    )
}

export default BoardItem


