import React from 'react';

const TodoForm = () => (
  <form>
    <label>
      I need to do
      <input type={'text'} />
    </label>
    <input type={'submit'} value={'Add!'} />
  </form>
)

export default TodoForm;
