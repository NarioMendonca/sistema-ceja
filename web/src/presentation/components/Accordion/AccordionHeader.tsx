import Styles from './accordionHeader.module.scss'
import { useAccordion } from "./AccordionContext"

export const AccordionHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen, setIsOpen } = useAccordion()

  return (
    <div className={`${Styles.accordionHeader} ${isOpen ? Styles.accordionHeaderOpen : ''}`} onClick={() => setIsOpen(!isOpen)}>
      {children}
      <span className={`${Styles.accordionArrow} ${isOpen ? Styles.isOpen : Styles.isClose}`}></span>
    </div>
  )
}