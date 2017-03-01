import React from 'react';

const Todo = (props) => (
  <li key={props.item.id} onClick={props.onClick}> {props.item.text} </li>
)

export default Todo;
