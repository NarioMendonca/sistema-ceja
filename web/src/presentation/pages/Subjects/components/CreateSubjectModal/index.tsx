import React, { useState } from 'react'
import Styles from './create-subject-modal-styles.module.scss'

type Props = {
  handleAddSubject: (event: React.FormEvent<HTMLFormElement>) => void
}

export function CreateSubjectModal({ handleAddSubject }: Props) {
  const [subjectName, setSubjectName] = useState<string>('')

  return (
    <div className={Styles.modalWrap}>
      <h1>Adicionar uma matéria</h1>
      <form className={Styles.modalForm} onSubmit={handleAddSubject}>
        <div className={Styles.inputWrap}>
          <label htmlFor="subject-name">Nome da matéria</label>
          <input
            type="text"
            id="subject-name"
            placeholder='nome da matéria'
            autoComplete='off'
            value={subjectName}
            onChange={(e) => { setSubjectName(e.target.value) }}
          />
        </div>
        <div className={Styles.btnContainer}>
          <button type='submit'>Adicionar</button>
        </div>
      </form>
    </div>
  )
}