import React from 'react';

class ModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        {this.props.price}
      </div>
    );
  }
}

export default ModalFooter;
