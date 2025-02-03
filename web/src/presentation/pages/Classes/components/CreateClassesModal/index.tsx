import React, { useState } from 'react'
import Styles from './create-class-modal-styles.module.scss'

type Props = {
  handleAddClass: (event: React.FormEvent<HTMLFormElement>) => void
}

export function CreateClassModal({ handleAddClass }: Props) {
  const [nameToClass, setNameToClass] = useState<string>('')

  return (
    <div className={Styles.modalWrap}>
      <h1>Adicionar uma Turma</h1>
      <form className={Styles.modalForm} onSubmit={handleAddClass}>
        <div className={Styles.inputWrap}>
          <label htmlFor="class-name">Nome da Turma</label>
          <input
            type="text"
            id="class-name"
            placeholder='nome da turma'
            autoComplete='off'
            value={nameToClass}
            onChange={(e) => { setNameToClass(e.target.value) }}
          />
        </div>
        <div className={Styles.btnContainer}>
          <button type='submit'>Adicionar</button>
        </div>
      </form>
    </div>
  )
}