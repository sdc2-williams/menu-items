import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 0px;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: rgb(255, 255, 255);
    padding: 16px 20px;
    border-top: border: 1px solid rgba(217,219,224,0.5);
`;

const Left = styled.div`
    font-family: PostmatesStd, "Helvetica Neue", Helvetica;
    font-size: 16px;
    letter-spacing: -0.28px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: rgb(255, 255, 255);
    width: 168px;
    max-width: 168px;
    height: 56px;
    color: rgb(45, 49, 56);
    margin-left: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(217, 219, 224, 0.5);
    border-image: initial;
    border-radius: 100px;
`;

class ModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      oldPrice: 0,
      count: 1,
    };
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    this.closeEvent = this.closeEvent.bind(this);
  }

  closeEvent() {
    this.setState({ price: 0, oldPrice: 0, count: 1 });
    this.props.clickHandler();
  }

  IncrementItem() {
    const price = parseFloat(this.state.price);
    const oldPrice = parseFloat(this.state.oldPrice);
    const newPrice = parseFloat(price + oldPrice).toFixed(2);
    this.setState({ price: newPrice, count: this.state.count + 1 });
    console.log(this.state);
  }

  DecreaseItem() {
    this.setState({ price: this.state.price - this.state.oldPrice, count: this.state.count - 1 });
  }

  static getDerivedStateFromProps(next, state) {
    if (!state.price) {
      return { price: next.price, oldPrice: next.price, count: 1 };
    }
    return null;
  }

  render() {
    return (
      <Foot>
        <Left className="increment-btn">
          <button className="btn-minus" onClick={this.DecreaseItem}> -  </button>
          <span className="countSpan">{this.state.count}</span>
          <button className="btn-plus" onClick={this.IncrementItem}>  + </button>
        </Left>
        <div>
          <button className="btn-cancel" onClick={this.closeEvent}>ADD TO CART  {this.state.price}</button>
        </div>
      </Foot>
    );
  }
}


export default ModalFooter;
