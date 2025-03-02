import { PropsWithChildren } from 'react';
import Styles from './inputProvider.module.scss';
import React from 'react';
import { InputContext } from './InputContext';

export const InputProvider: React.FC<{ inputId: string } & PropsWithChildren> = ({ children, inputId }) => {
  let inputIcon: React.ReactNode | null = null;
  let hasInputError: boolean = false;
  const validInputProviderChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && typeof child.type === 'function') {
      if (child.type.name === 'InputIcon') {
        inputIcon = child;
        return null;
      }
      if (child.type.name === 'InputError') {
        hasInputError = true;
      }
    }
    return child;
  });

  return (
    <div className={Styles.inputWrap}>
      <InputContext.Provider value={{ inputId, inputIcon, hasInputError }}>
        {validInputProviderChildren}
      </InputContext.Provider>
    </div>
  );
};