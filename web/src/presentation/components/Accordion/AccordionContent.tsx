import Styles from './accordionContent.module.scss'
import { useAccordion } from './AccordionContext'

type AccordionContentProps = {
  extraClassName?: string
} & React.PropsWithChildren

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, extraClassName }) => {
  const { isOpen } = useAccordion()

  return (
    <div className={`${Styles.accordionContent} ${isOpen ? '' : Styles.displayOff} ${extraClassName ?? ''}`}>
      {children}
    </div>
  )
}