import React from 'react';
import { useInputContext } from './InputContext';
import Styles from './inputRoot.module.scss';

type InputRootProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const InputRoot: React.FC<InputRootProps> = ({ ...props }) => {
  const { inputId, inputIcon, hasInputError } = useInputContext();
  props.id = inputId;

  return (
    <div className={Styles.inputFieldWrapper}>
      <input
        autoComplete="off"
        {...props}
        aria-describedby={hasInputError ? `${inputId}ErrorMsg` : undefined}
      />
      {inputIcon}
    </div>
  );
};