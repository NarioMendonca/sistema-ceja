import Styles from './accordionHeader.module.scss'
import { useAccordion } from "./AccordionContext"

type Props = {
  extraClassName?: string
} & React.PropsWithChildren

export const AccordionHeader: React.FC<Props> = ({ children, extraClassName }) => {
  const { isOpen, setIsOpen } = useAccordion()

  return (
    <div className={`${Styles.accordionHeader} ${isOpen ? Styles.accordionHeaderOpen : ''} ${extraClassName ?? ''}`} onClick={() => setIsOpen(!isOpen)}>
      {children}
      <span className={`${Styles.accordionArrow} ${isOpen ? Styles.isOpen : Styles.isClose}`}></span>
    </div>
  )
}