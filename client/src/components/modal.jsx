import React from 'react';
import ModalFooter from './modalFooter.jsx';
import ModalBody from './modalBody.jsx';
import styled from 'styled-components'

const Modal = styled.div`
  @media screen and (min-width: 1060px) {
    max-width: 524px;
    height: 100%;
    width: 100%;
    max-height: 600px;
    overflow: hidden;
  }
`

const modal = props => (
  <Modal>
    <div
      className="modal-wrapper"
      style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      <div className="modal-header">
        <span className="close-modal-btn" onClick={props.close}>×</span>
      </div>
      <div className="modal-body">
          <ModalBody name = {props.data.name} description={props.data.description} options={props.data.options}/>
      </div>
      <div className="modal-footer">
          <ModalFooter price = {props.data.price} clickHandler = {props.close}/>
      </div>
    </div>
  </Modal>

);

export default modal;
