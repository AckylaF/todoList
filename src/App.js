import React, { Component } from 'react';
import crypto from 'crypto';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Deliver essay',
        completed: false
      }
    ]
  }


  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })    
  }

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => {
      return todo.id !== id
    }) })
  }

  addTodo = (title) => {
    const id = crypto.randomBytes(4).toString('HEX')
    const newTodo = {
      id,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ] })
  }


  render() {    
    return(
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;