import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'Well, do something'
      },
      {
        id: 2,
        text:'Lol, like what?'
      },
      {
        id: 3,
        text:'idk, an hero?'
      }
    ]
    };
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(val){
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data,todo];
    this.setState({data});
  }
  removeTodo(id){
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data:remainder});
  }
  render(){
    return (
      <div className={style.TodoApp}>
        <div className={style.Title}>
          <Title todos={this.state.data}/>
        </div>
        <div className={style.TodoList}>
          <TodoList items={this.state.data} onClick={this.removeTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
