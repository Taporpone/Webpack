import React from 'react';

const TodoList = ({items,onClick}) => (
  <ul>
    {items.map(item => (
      <li key={item.id} onClick={() => {onClick(item.id)}}>{item.text}</li>
    ))}
  </ul>
)
export default TodoList;
