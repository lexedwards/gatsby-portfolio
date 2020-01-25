import React from 'react';

import Input, { LongInput } from './atoms/FormBlock';
import ModalMessage from './atoms/ModalMessage';

const FormField = (props) => {

  const isValid = props?.isValid || true;
  const label =  props?.name || props?.placeholder

  return (
    <div className="textfield">
      <p className="textfield--helper-label ui">{label}</p>
      <Input {...props}/>
      {!isValid && 
      (<ModalMessage
        theme="accent3"
      >
        {props.errorMessage}
      </ModalMessage> )} 
    </div>
  );
};

export const TextField = (props) => {
  
  const isValid = props?.isValid || true;
  const label =  props?.name || props?.placeholder


  return (
    <div className="textfield">
      <p className="textfield--helper-label ui">{label}</p>
      <LongInput {...props}/>
      {!isValid && 
      (<ModalMessage
        theme="accent3"
      >
        {props.errorMessage}
      </ModalMessage> )} 
    </div>
  );

}

export default FormField;