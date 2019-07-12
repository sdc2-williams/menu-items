import React from 'react';

const ModalBody = props => (
  <div>
    <div>
      <h3>{props.name}</h3>
      <h1>{props.description}</h1>
    </div>
    <div>
        {/* {
          Object.entries(props.options).map((option) => {
            <input type="checkbox" value={option[0]}>
            <label>{options[1]}<label/>
          })
        } */}
    </div>
  </div>
);

export default ModalBody;
