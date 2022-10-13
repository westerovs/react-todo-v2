import React from 'react';
import './style.css'
import SearchPanel from '../searchPanel'
import ListTodo from '../listTodo';

const todoData = [
  {text: 'Hello World', important: false, id: 1},
  {text: 'Hello JS', important: false, id: 2},
  {text: 'Good Bye Russia', important: false, id: 3},
  {text: 'Hello Astana', important: false, id: 4},
  {text: 'I love Maria', important: false, id: 5},
]

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <SearchPanel/>
        <ListTodo todos={todoData} />
      </div>
    )
  }
}
