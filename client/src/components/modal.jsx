import React from 'react';
import styled from 'styled-components';
import ModalFooter from './modalFooter.jsx';
import ModalBody from './modalBody.jsx';

const Modal = styled.div`
  @media screen and (min-width: 1060px)
  {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    box-sizing: border-box;
  }
`;

const ModalBody1 = styled.div`
  @media screen and (min-width: 1060px){
      height: calc(100% - 80px);
      overflow-y: auto;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
      position: relative;
      padding: 20px
  }
`;

const modal = props => (
  <Modal>
    <div
      className="modal-wrapper"
      style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      <ModalBody1 clasName="footer">
        <div className="modal-header" />
        <span className="close-modal-btn" onClick={props.close}>×</span>
        <div className="modal-body">
          <ModalBody name={props.data.name} description={props.data.description} options={props.data.options} />
        </div>
      </ModalBody1>
      <div className="modal-footer">
        <ModalFooter price={props.data.price} clickHandler={props.close} />
      </div>
    </div>
  </Modal>

);

export default modal;
