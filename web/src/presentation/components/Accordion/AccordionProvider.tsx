import React from 'react'
import Styles from './accordionProvider.module.scss'
import { AccordionContextProvider } from './AccordionContext'

export const AccordionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AccordionContextProvider>
      <div className={Styles.accordion}>
        {children}
      </div>
    </AccordionContextProvider>
  )
}