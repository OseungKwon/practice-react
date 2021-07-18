import React, { useState, useCallback, useRef } from 'react'
import moment from 'moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../redux/items';
import axios from 'axios';
let date = moment().format('YYYY. MM. DD. HH:mm:ss');

const BoardIem = ({ id, content }) => {
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
            <h3 className="number">{id}</h3>
            <input
                name="content"
                readOnly={readOnly}
                defaultValue={content}
                onChange={onChangeText}
                onBlur={() => dispatch(updateItem(id, updateText))}
                ref={onfocus}
            />
            <h3>{date}</h3>
            <button onClick={editContent}>readonly</button>
            <button onClick={deleteContent}>삭제</button>
        </div>
    )
}

export default BoardIem


