import React from 'react'

export default class ItemTodo extends React.Component {

  render() {
    const {important, text} = this.props
    
    const span  = important ? 'red' : null
    const style = {
      color: span
    }

    return <li style={ style }>{ text }</li>
  }
}

