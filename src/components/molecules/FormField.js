import React from 'react';

import Input, { LongInput } from './atoms/FormBlock';

const FormField = (props) => {

  const isValid = props?.isValid || true;
  const label =  props?.name || props?.placeholder

  return (
    <div className="textfield">
      <p className="textfield--helper-label ui">{label}</p>
      <Input {...props}/>
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
    </div>
  );

}

export default FormField;