import React from 'react';

class Title extends React.Component {
  get todos(){
    const isPlural = (this.props.todos.length === 1) ? 'todo' : 'todos';
    return (
      `${this.props.todos.length} ${isPlural}`
    )
  }
  render(){
    return (
      <div>
        <h1> Awesome todo list </h1>
        <p> You've added <strong>{this.todos}</strong> so far! </p>
      </div>
    )
  }
};

export default Title;
