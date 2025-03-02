import { createContext, useContext } from 'react';

type InputContextProps = {
  inputId: string,
  inputIcon: React.ReactNode | null,
  hasInputError: boolean
}

export const InputContext = createContext<InputContextProps | null>(null);

export const useInputContext = () => {
  return useContext(InputContext) as InputContextProps;
};