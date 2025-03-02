import React from 'react';
import Styles from './inputError.module.scss';
import { useInputContext } from './InputContext';

type InputErrorlProps = {
  hasError: boolean,
  children: React.ReactNode
}

export const InputError: React.FC<InputErrorlProps> = ({ children, hasError }) => {
  const { inputId } = useInputContext();


  return (
    <p id={`${inputId}ErrorMsg`} className={hasError ? Styles.inputErrMsg : Styles.offScreen}>{children}</p>
  );
};