import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../atoms'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'

const TodoList = () => {
    const todoList = useRecoilValue(todoListState)
    console.log(todoList)
    return (
        <div>
            <h2>TodoList</h2>
            <TodoItemCreator />
            {todoList.map(todoItem => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    )
}

export default TodoList
