import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms'

const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex(todoItem => todoItem === item)

    const toggleCompleteState = () => {
        const updateList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete
        })
        setTodoList(updateList)
    }

    const editTodo = (e) => {
        const updateList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: e.target.value
        })
        setTodoList(updateList)
    }
    const deleteTodo = () => {
        const updateList = removeItemAtIndex(todoList, index)
        setTodoList(updateList)
    }
    return (
        <div>
            <input type="checkbox" onChange={toggleCompleteState} checked={item.isComplete} />
            <input type="text" value={item.text} onChange={editTodo} />
            <button onClick={deleteTodo}>삭제</button>
        </div>
    )
}

export default TodoItem
