import React from 'react';
//import ModalFooter from './modalFooter.jsx';
import ModalBody from './modalBody.jsx';

const modal = props => (
  <div>
    {console.log(props.data)}
    <div
      className="modal-wrapper"
      style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
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
                  {/* <ModalFooter price ={props.data.price}/> */}
        <button className="btn-cancel" onClick={props.close}>CLOSE</button>
      </div>
    </div>
  </div>

);

export default modal;
