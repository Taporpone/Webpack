import React from 'react';

const Todo = (props) => (
  <li onClick={props.onClick}> {props.item.text} </li>
)

export default Todo;
