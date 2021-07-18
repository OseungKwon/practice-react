import React, { useState } from 'react';
import { insertItem } from '../redux/items';
import { useSelector, useDispatch } from 'react-redux';
import BoardItem from './BoardItem';
import ItemInput from './ItemInput';


const BoardList = () => {
    const items = useSelector(state => state.items.items);



    return (
        <div>
            <ItemInput />
            {items.map(item => (
                <BoardItem key={item.id} content={item.content} id={item.id} />
            ))}

        </div>
    )
}

export default BoardList;