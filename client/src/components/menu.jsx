import React from 'react';
import Item from './item.jsx';


class Menu extends React.Component {
  constructor({props}) {
    super({props});
    this.state = {
      showModal: false,
      itemID: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e) {
    console.log(e.target.parentNode.id)
  }
  render() {
    return (
      <div className = 'menu'>
        <ul>
          {this.props.menuItems.map(item => <Item item = {item} handleItemClick = {this.handleItemClick}/>)}
        </ul>
      </div>
    )
  }
}

export default Menu;