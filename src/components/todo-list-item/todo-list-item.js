import React from 'react'
import './todo-list-item.css'
import basket from '../../assets/icons/basket.svg'
import access from '../../assets/icons/check-mark.svg'

export default class TodoListItem extends React.Component {
  
  state = {
    important: this.props.important,
    done: this.props.done,
  }
  
  setLabel = () => {
    this.setState(({done}) => {
      return { done: !done }
    })
  }
  
  setImportant = () => {
    this.setState(({important}) => {
      return {important: !important}
    })
  }
  
  render() {
    const {label, onDeleted} = this.props
    const {important, done} = this.state
  
    let classNames = 'list__item-header'
    if (done) classNames += ' list__item-header--done'
    if (important) classNames += ' list__item-header--important'

    return (
      <li className="todo__list-item">
        <p className={ classNames } onClick={ this.setLabel }>{ label }</p>
      
        <div className="img-cover"></div>
      
        <div className="list__item-row">
          <button type="button" className="" onClick={ this.setImportant }>
            <img width="20" height="20" className="list__item-icon" src={ access } alt="image"/>
          </button>
          <button type="button" className="" onClick={() => onDeleted()}>
            <img width="20" height="20" className="list__item-icon" src={ basket } alt="image"/>
          </button>
        </div>
      </li>
    )
  }
}

