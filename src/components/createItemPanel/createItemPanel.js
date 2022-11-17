import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item.js'

import './createItemPanel.css'

export default class CreateItemPanel extends React.Component {
  
  state = {
    label: '',
    important: 'important',
    id: this.props.todos.length + 1,
    done: 'done',
  }
  
  getInput = () => {
    return {
      label    : this.state.label,
      important: 'important',
      id       : this.props.todos.length + 1,
      done     : 'done',
    }
  }
  
  getText = (target) => {
    this.setState(({label}) => {
      label = target
      
      return {
        label: label
      }
    })
  }
  
  render() {
    const {createItem} = this.props
    
    return (
      <div className="todo__create">
        <input onChange={(e) => this.getText(e.target.value)} className="" type="text" placeholder="add a new task"/>
        <button onClick={() => createItem(this.getInput())} type="button">ADD</button>
      </div>
    )
  }
}
