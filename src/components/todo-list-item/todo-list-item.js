import React from 'react';
import './todo-list-item.css';
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
    const {label, important, done} = this.props
    
    const style = {
      color: this.state.important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
      textDecoration: this.state.done ? 'line-through 2px': 'none',
    };
  
    return (
      <li className="todo__list-item">
        <p className="list__item-header" style={ style }
          onClick={ this.setLabel }
        >{ label }</p>
      
        <div className="img-cover"></div>
      
        <div className="list__item-row">
          <button type="button" className="" onClick={ this.setImportant }>
            <img width="20" height="20" className="list__item-icon" src={ access } alt="image"/>
          </button>
          <button type="button" className="">
            <img width="20" height="20" className="list__item-icon" src={ basket } alt="image"/>
          </button>
        </div>
      </li>
    );
  }
}

