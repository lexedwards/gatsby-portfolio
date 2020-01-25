import React from 'react';



const FormGroup = (props) => {

  return (
    <>
      <div className="form--group" data-form-group={`form-group-${props.id}`}>
        {props.children}
      </div>
    </>
  );
};

export const TextField = (props) => {

  

}

export default FormGroup;