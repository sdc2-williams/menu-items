import React from 'react';
import styled from 'styled-components';
import Modal from './modal.jsx';

const Container = styled.div`
  @media screen and (min-width: 1061px){
    width: calc(50% - 17.5px);
    margin: 16px 0;
    padding: 0;
    border: 1px solid rgba(217,219,224,0.5);
    height: 128px;
  }
  &:hover {background-color:#F7F7F8};
`;

const Body = styled.div`
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 20px 20px 15px;
`;
const Name = styled.h3`
  font-family: 'PostmatesStd',Helvetica Neue,Helvetica;
  font-size: 16px;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: block;
  overflow: hidden;
  color: #2D3138;
  margin: 0 0 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Description = styled.div`
  -webkit-box-orient: vertical;
  font-family: 'PostmatesStd',Helvetica Neue,Helvetica;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(143,149,163,0.9);
  margin-bottom: 5px;
  letter-spacing: 0.14px;
  font-weight: 400;
`;

const Price = styled.div`
  font-family: 'PostmatesStd',Helvetica Neue,Helvetica;
  letter-spacing: -0.16px;
  font-weight: 500;
  color: #00CC99;
  line-height: 20px;
  font-size: 13px;
  margin-top: 20px;
`;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: {},
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      modalData: {},
    });
  }

  handleItemClick(e) {
    for (const i in this.props.menuItems) {
      if (e.target.parentNode.id === this.props.menuItems[i]._id) {
        this.setState({ modalData: this.props.menuItems[i] }, this.openModal);
      }
    }
  }

  render() {
    console.log(this.state.modalData);
    return (
      <>
        <Container>
          <Body className="singleItem" id={this.props.item._id} onClick={this.handleItemClick}>
            { this.state.showModal ? <div onClick={this.closeModal} className="back-drop" /> : null }
            <Modal
              data={this.state.modalData}
              className="modal"
              show={this.state.showModal}
              close={this.closeModal}
            />
            <Name className="itemName">{this.props.item.name}</Name>
            <Description className="itemDescription">{this.props.item.description}</Description>
            <Price className="itemPrice">
                $
              {this.props.item.price}
            </Price>
          </Body>
        </Container>
      </>
    );
  }
}

export default Item;
