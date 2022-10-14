import React from 'react'

import TodoListItem from '../todo-list-item/todo-list-item.js'
import './todo-list.css'

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item

    return (
        <TodoListItem key={id} {...itemProps } />
    )
  })

  return (
    <ul className="todo__list">
      { elements }
    </ul>
  );
};

export default TodoList;
