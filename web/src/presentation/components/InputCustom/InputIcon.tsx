import { CircleCheck, CircleX } from '@/presentation/icons';
import Styles from './inputIcon.module.scss';
import { ReactElement } from 'react';

type InputIconProps = {
  isValid: boolean,
  validIcon?: ReactElement,
  invalidIcon?: ReactElement,
  onScreen?: boolean
}

export const InputIcon: React.FC<InputIconProps> = ({ validIcon, invalidIcon, isValid, onScreen }) => {
  return (
    <>
      {onScreen ? isValid ? <div className={`${Styles.inputIcon} + ${Styles.ok}`}>{validIcon ?? <CircleCheck />}</div> : <div className={`${Styles.inputIcon} + ${Styles.wrong}`}>{invalidIcon ?? <CircleX />}</div> : null}
    </>
  );
};