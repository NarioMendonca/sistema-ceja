import React, { createContext, useContext } from 'react'
import Styles from './modal-styles.module.scss'
import ReactDOM from 'react-dom'

type Props = {
  isOpen: boolean
  onClose: any
}

type ModalContextProps = {
  onClose: any
}

const ModalContext = createContext<ModalContextProps>({ onClose: null })
export const useModalContext = () => useContext(ModalContext)

export function Modal({ isOpen, onClose, children }: React.PropsWithChildren<Props>) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={`${Styles.modalOverlay} modalOverlay`} onClick={onClose}>
      <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={Styles.closeBtn} onClick={onClose}>×</button>
        <ModalContext.Provider value={{ onClose }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}