import React from 'react';

class Title extends React.Component {
  get todos(){
    if (this.props.todos.length === 1){
      return <strong> {this.props.todos.length} todo </strong>
    }else{
      return <strong> {this.props.todos.length} todos </strong>
    };
  }
  render(){
    return (
      <div>
        <h1> Awesome todo list </h1>
        <p> You've added {this.todos} so far! </p>
      </div>
    )
  }
};

export default Title;
