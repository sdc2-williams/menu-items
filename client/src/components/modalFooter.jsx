import React from 'react';

class ModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // oldPrice: props.price,
      // price: props.price,
      price: 0,
      oldPrice: 0,
      count: 1
    };
    this.IncrementItem = this.IncrementItem.bind(this)
    this.DecreaseItem = this.DecreaseItem.bind(this)
  }


  IncrementItem() {
    let price = parseFloat(this.state.price)
    let oldPrice = parseFloat(this.state.oldPrice)
    let newPrice = parseFloat(price + oldPrice).toFixed(2)
    this.setState({ price: newPrice, count: this.state.count + 1 });
    console.log(this.state)
  }
  DecreaseItem() {
    this.setState({ price: this.state.price - this.state.oldPrice, count: this.state.count - 1 });
  }

  static getDerivedStateFromProps(next, state) {
    if (!state.price) {
      return {price: next.price, oldPrice: next.price}
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div className= "itemPrice">
        <button className="btn-minus" onClick={this.DecreaseItem}> - </button>
        <span>{this.state.count}</span>
        <button className="btn-plus" onClick = {this.IncrementItem}> + </button>
        <button className="btn-cancel" onClick={this.props.clickHandler}> ADD TO CART {this.state.price}</button>
        </div>
      </div>
    );
  }
}

export default ModalFooter;
