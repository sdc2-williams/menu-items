import React from 'react';

const ModalBody = props => {

let options = props.options ? Object.keys(props.options) : []

 return(
 <div>
    <div>
      <h1 className ="itemName">{props.name}</h1>
      <h3 className ="itemDescription">{props.description}</h3>
    </div>
    <div>
      <form>
        <fieldset>
        <legend>Options</legend>
          {
            options.map((item) => {
              return (
                <div>
                  <input type="checkbox" id="checklist" name="subscribe" value="newsletter"></input>
                  <label for="subscribeNews">{item}</label>
                </div>
              )
            })
          }
        </fieldset>
      </form>
    </div>
  </div>
 )
};

export default ModalBody;
