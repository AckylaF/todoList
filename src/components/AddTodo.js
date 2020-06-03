import React, { Component } from  'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="Add Todo"
          value={this.state.title}
          onChange={this.handleInput}
        />

        <input 
          type="submit" 
          value="Submit"
          className="button"
        />
      </form>
    )
  }
}

export default AddTodo;