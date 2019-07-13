import React from 'react';
import Item from './item.jsx';
import Modal from './modal.jsx';


class Menu extends React.Component {
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
    return (
      <>
        { this.state.showModal ? <div onClick={this.closeModal} className="back-drop" /> : null }
        <Modal
          data ={this.state.modalData}
          className="modal"
          show={this.state.showModal}
          close={this.closeModal}
        >
        </Modal>
        <div className="menu">
          <ul>
            {this.props.menuItems.map(item => <Item item={item} handleItemClick={this.handleItemClick} />)}
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
