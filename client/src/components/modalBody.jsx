import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  width: 100%
  padding-bottom: 3px
`
const Description = styled.div`
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  color: rgb(143, 149, 163);
  line-height: 1.33;
`
const Extras = styled.div`
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  color: rgb(45, 49, 56);
  border-bottom: 1px solid #ECEDEF;
`
const Label = styled.div`
  font-size: 14px;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;

`
const ModalBody = props => {

let options = props.options ? Object.keys(props.options) : []

 return(
 <div>
    <div>
      <Title className ="itemName">{props.name}</Title>
      <Description className ="itemDescription">{props.description}</Description>
      <Extras>Extra Add-Ons</Extras>
    </div>
    <div>
      <form>
        <fieldset>
          {
            options.map((item) => {
              return (
                <div>
                  <input type="checkbox" id="checklist"></input>
                  <Label><label for="subscribeNews">{item}</label></Label>
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
