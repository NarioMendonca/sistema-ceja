import React from 'react';
import { useInputContext } from './InputContext';

type InputLabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  text: string
}

export const InputLabel: React.FC<InputLabelProps> = ({ text, ...props }) => {
  const { inputId } = useInputContext();
  return (
    <label {...props} htmlFor={inputId}>{text}</label>
  );
};