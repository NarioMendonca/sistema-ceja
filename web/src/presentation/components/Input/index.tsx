import React from "react";
import Styles from './input-styles.module.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string,
  error?: string
}

export function Input({ label, error, ...props }: Props) {
  return (
    <div className={Styles.inputWrap}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        autoComplete="off"
        {...props}
      />
    </div>
  )
}