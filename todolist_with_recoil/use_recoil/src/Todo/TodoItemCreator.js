import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms'

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const [TodoList, setTodoList] = useRecoilState(todoListState)

    const onSubmit = e => {
        e.preventDefault();
        setTodoList([...TodoList, {
            id: getId(),
            text: inputValue,
            isComplete: false
        }])
        setInputValue('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
                <button>입력</button>
            </form>
        </div>
    )
}
let id = 0;
const getId = () => {
    return id++;
}

export default TodoItemCreator
