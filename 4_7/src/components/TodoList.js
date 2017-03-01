import React from 'react';
import Todo from './Todo.js'

const TodoList = (props) => (
  <ul>
    {props.items.map(item => (
      <Todo key = {item.id} item={item} onClick={() => {props.onClick(item.id)}} />
    ))}
  </ul>
)
export default TodoList;
