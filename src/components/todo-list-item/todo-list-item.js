import React from 'react';
import './todo-list-item.css';
import basket from '../../assets/icons/basket.svg'
import access from '../../assets/icons/check-mark.svg'

export default class TodoListItem extends React.Component {
  
  state = {
    important: this.props.important
  }
  
  setImportant = () => {
    this.setState({
      important: !this.state.important
    })
  }
  
  render() {
    const {label, important = false} = this.props
    
    const style = {
      color: this.state.important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
  
    return (
      <li className="todo__list-item">
        <p className="list__item-header" style={ style }>{ label }</p>
      
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

