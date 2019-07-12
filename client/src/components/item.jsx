import React from 'react';

const Item = ({ item, handleItemClick }) => (
  <>
    <div className ="singleItem" id ={item._id} onClick={handleItemClick}>
      <div className ="itemName">{item.name}</div>
      <div className ="itemDescription">{item.description}</div>
      <div className= "itemPrice">{item.price}</div>
    </div>
  </>
);
export default Item;
