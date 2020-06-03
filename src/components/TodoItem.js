import React, { Component } from 'react';
import propTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo
    return(
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title } {' '}
          <button className="button" onClick={this.props.deleteTodo.bind(this, id)}>Delete</button> 
        </p>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem;