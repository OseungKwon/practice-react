import React, { useState, useCallback } from 'react'
//import moment from 'moment';
//import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../redux/items';
import { users } from '../auth/auth'
let date = 1//moment().format('YYYY. MM. DD. HH:mm:ss');

const BoardItem = ({ id, content, email, lassword, name }) => {
    const dispatch = useDispatch();
    const [readOnly, setReadOnly] = useState(true);
    const [updateText, setUpdateText] = useState(content);

    const onChangeText = useCallback(
        (e) => {
            const { value } = e.target;
            setUpdateText(value);
        },
        [updateText]
    );

    return (
        <div>
            <h3>{id} |  | {date} | {name}</h3>
            <input
                name="content"
                readOnly={readOnly}
                defaultValue={content}
                onChange={onChangeText}
                onBlur={() => dispatch(updateItem(id, updateText))}

            />
            <button onClick={() => setReadOnly(!readOnly)}>readonly</button>
            {id === 1 ? (<button onClick={() => dispatch(removeItem(id))}>삭제</button>) : (<></>)}
        </div>
    )
}

export default BoardItem
