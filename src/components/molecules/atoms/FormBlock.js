import React, { useRef, useState, useEffect } from 'react';
import Cross from '../../../svg/Cross--Box.svg';
import Tick from '../../../svg/Tick--Box.svg';
import {inputAttr} from './inputAttr';
import ModalMessage from './ModalMessage';

export default function Input (props) {

  const inputEle = useRef();
  const [useValidCheck , setValidCheck ] = useState(null);

  let inputDeclare = new inputAttr();
  inputDeclare = {...inputDeclare, ...props };
  const type = inputDeclare.type;
  inputDeclare[type](); // Set specific attributes for the type


  useEffect( () => {

      const { current } = inputEle;

      const handleBlur = () => {
        if (current.value === '') {
            current.setCustomValidity(inputDeclare.errorMessage);
        } else if (current.validity.typeMismatch){
            current.setCustomValidity(inputDeclare.errorMessage);
        } else {
          current.setCustomValidity('');
        }
        const isValidState =  current.value !== '' ? current.checkValidity() : null;
        setValidCheck(isValidState)
      }

      current.addEventListener('blur', handleBlur);

      return () => current.removeEventListener('blur', handleBlur);
    }, [inputEle]
  )

  return (
    <>
      <label 
      className={
        `textfield--label 
        ${inputDeclare.hasVerification && 'hasVeri'}
        `}
      aria-label={inputDeclare.label}
      >
        <input
        ref={inputEle} 
        className={
          `textfield--input ui 
          ${useValidCheck !== null && (
            useValidCheck
            ? 'isValid'
          : 'isInvalid'
          )}
          `}
        type={inputDeclare.type}
        name={inputDeclare.name}
        id={inputDeclare.uniqueId}
        pattern={inputDeclare.pattern}
        placeholder={inputDeclare.placeholder}
        disabled={inputDeclare.isDisabled}
        autoCorrect={inputDeclare.hasAutocorrect}
        autoCapitalize={inputDeclare.autocapitalize}
        required={inputDeclare.isRequired}
        inputMode={inputDeclare.inputMode}
        onChange={inputDeclare.handleChange}
        />
        {inputDeclare.hasVerification &&
          ( useValidCheck !== null && (
            useValidCheck
            ? <Tick className="textfield--icon tickbox"/>
            : <Cross className="textfield--icon crossbox" />
            ))
        }
      </label>
      { useValidCheck !== null && (
          !useValidCheck && (
            <ModalMessage theme="accent3" >
              {inputDeclare.errorMessage}
            </ModalMessage> 
          )
        )
      } 
    </>
  )
};

export function LongInput (props) {

  let inputDeclare = new inputAttr();

  inputDeclare = { ...inputDeclare, ...props };
  inputDeclare.textarea();

  return (
    <label className="textfield--label" aria-label={inputDeclare.label}>
      <textarea 
        className="textfield--input ui" 
        name={inputDeclare.name}
        rows={inputDeclare.rows}
        placeholder={inputDeclare.placeholder}
        disabled={inputDeclare.isDisabled}
        autoCorrect={inputDeclare.hasAutocorrect}
        autoCapitalize={inputDeclare.autocapitalize}
        onChange={inputDeclare.handleChange}
      />
      {inputDeclare.hasVerification && (
        inputDeclare.isValid ? 
        ( <Tick /> ) :
        ( <Cross /> )
      )}
    </label>
  )

}