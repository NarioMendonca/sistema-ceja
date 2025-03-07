import Styles from './button-styles.module.scss'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & React.PropsWithChildren & {
  extraClassName?: string
}

export const Button: React.FC<ButtonProps> = ({ children, extraClassName, ...props }) => {


  return (
    <button {...props} className={`${Styles.button} ${extraClassName ?? ''}`}>{children}</button>
  )
}