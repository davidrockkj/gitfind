import React from 'react';
import './styles.css';

function ItemList({ link, title, description }) {
  return (
    <div className='item-list'>
      <a href={link} target='blank'>{title}</a>
      <p>{description}</p>
      <hr />
    </div>
  )
}

export default ItemList;