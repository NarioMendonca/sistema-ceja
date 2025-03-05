import { createContext, useContext, useState } from "react";

type contextProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccordionContext = createContext<contextProps | null>(null)

export const useAccordion = () => useContext(AccordionContext) as contextProps

export const AccordionContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AccordionContext.Provider>
  )
}