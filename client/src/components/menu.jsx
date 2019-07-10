import React from 'react';
import Item from './item.jsx'

const Menu = ({ menuItems }) => (
  <div>
    <ul>
      {menuItems.map(item => <Item item = {item} />)}
    </ul>
  </div>
)

export default Menu;