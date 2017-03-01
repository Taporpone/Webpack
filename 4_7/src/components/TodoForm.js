import React from 'react';

const TodoForm = (props) => {
  const handleSubmit = event =>{
    event.preventDefault();
    props.onSubmit(props.todoValue);
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        I need to do
        <input type={'text'} value={props.todoValue} onChange={props.onChange}/>
      </label>
      <input type={'submit'} value={'Add!'} />
    </form>
  );
}

export default TodoForm;
