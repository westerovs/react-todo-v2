import React from 'react';
import './todo-list-item.css';
import basket from '../../assets/icons/basket.svg'
import access from '../../assets/icons/check-mark.svg'

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  
  return (
    <li className="todo__list-item">
      <p className="list__item-header" style={ style }>{ label }</p>
  
      <div className="img-cover"></div>
  
      <div className="list__item-row">
        <button type="button" className="">
          <img width="20" height="20" className="list__item-icon" src={ basket } alt="image"/>
        </button>
        <button type="button" className="">
          <img width="20" height="20" className="list__item-icon" src={ access } alt="image"/>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
