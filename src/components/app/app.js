import React from 'react'

import AppHeader from '../app-header/app-header.js'
import SearchPanel from '../search-panel/search-panel.js'
import TodoList from '../todo-list/todo-list.js'
import ItemStatusFilter from '../item-status-filter/item-status-filter.js'

import './app.css'

export default class App extends React.Component {
  
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1, done: true },
      { label: 'Make Awesome App', important: true, id: 2, done: false },
      { label: 'Have a lunch', important: false, id: 3, done: false }
    ]
  }
  
  onDeleted = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex(item => item.id === id)
      
      const before = todoData.slice(0, index)
      const after = todoData.slice(index + 1)
      
      return {
        todoData: [...before, ...after]
      }
    })
  }
  
  render() {
  
    return (
      <div className="app">
        <AppHeader toDo="1" done={ 3 } />
      
        <div className="">
          <SearchPanel />
          <ItemStatusFilter/>
        </div>
      
        <TodoList onDeleted={(id) => this.onDeleted(id)} todos={this.state.todoData} />
      </div>
    )
  }
}

