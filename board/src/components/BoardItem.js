import React, { useState, useCallback } from 'react'
import moment from 'moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../redux/items';

let date = moment().format('YYYY. MM. DD. HH:mm:ss');

const BoardIem = ({ id, content }) => {
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
            <h3>{id} |  | {date} | user</h3>
            <input
                name="content"
                readOnly={readOnly}
                defaultValue={content}
                onChange={onChangeText}
                onBlur={() => dispatch(updateItem(id, updateText))}

            />
            {id === 1 ? (<button onClick={() => setReadOnly(!readOnly)}>readonly</button>) : (<></>)}
            {id === 1 ? (<button onClick={() => dispatch(removeItem(id))}>삭제</button>) : (<></>)}
        </div>
    )
}

export default BoardIem
