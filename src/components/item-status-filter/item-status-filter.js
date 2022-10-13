import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="filter">
      <button type="button" className="filter__btn">All</button>
      <button type="button" className="filter__btn">Active</button>
      <button type="button" className="filter__btn">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
