import ItemTodo  from '../itemTodo/'

import React from 'react'

export default class ListTodo extends React.Component {
  render = () => {
    const {todos} = this.props
    
    const todo = todos.map((item) => {
      const {id, ...props} = item
      return <ItemTodo key={id} {...props} />
    })
  
    return (
      <ul >
        {todo}
      </ul>
    )
  }
}


