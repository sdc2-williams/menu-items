import React from 'react';

const Item = ({ item }) => (
  <>
    <div className = 'sigleItem'>
      <div className = 'itemName'>{item.name}</div>
      <div className = 'itemDescription'>{item.description}</div>
      <div className = 'itemPrice'>{item.price}</div>
    </div>
  </>
);
export default Item;