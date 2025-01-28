import React, { useState } from 'react'
import Styles from './create-course-modal-styles.module.scss'

type Props = {
  handleAddCourse: (event: React.FormEvent<HTMLFormElement>) => void
}

export function CreateCourseModal({ handleAddCourse }: Props) {
  const [courseName, setCourseName] = useState<string>('')

  return (
    <div className={Styles.modalWrap}>
      <h1>Adicionar uma matéria</h1>
      <form className={Styles.modalForm} onSubmit={handleAddCourse}>
        <div className={Styles.inputWrap}>
          <label htmlFor="course-name">Nome da matéria</label>
          <input
            type="text"
            id="course-name"
            placeholder='nome da matéria'
            autoComplete='off'
            value={courseName}
            onChange={(e) => { setCourseName(e.target.value) }}
          />
        </div>
        <div className={Styles.btnContainer}>
          <button type='submit'>Adicionar</button>
        </div>
      </form>
    </div>
  )
}