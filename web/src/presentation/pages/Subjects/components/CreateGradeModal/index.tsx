import React, { useState } from 'react'
import Styles from './create-grade-modal-styles.module.scss'
import { useModalContext } from '@/presentation/components/Modal'
import { CreateGrade } from '@/domain/use-cases/grades/create-grade'
import { Module } from '@/domain/models/Module'

type Props = {
  studentId: string
  studentName: string
  defaultModuleId: string
  remoteCreateGrade: CreateGrade
  modules: Module[]
}

type CreateGradeParams = {
  name: string,
  value: number
  moduleId: string
}

export function CreateGradeModal({ remoteCreateGrade, studentId, defaultModuleId, studentName, modules }: Props) {
  const [grade, setGrade] = useState<CreateGradeParams>({
    name: '',
    value: 7,
    moduleId: defaultModuleId
  })
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { onClose } = useModalContext()

  const handleCreateGrade = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (grade.name.length < 3) {
      throw new Error('O nome da nota deve ter pelo menos de 3 caracteres!')
    }
    if (grade.value === null) {
      throw new Error('A nota deve ter um valor de 0 a 10!')
    }
    try {
      await remoteCreateGrade.handle({ name: grade.name, gradeValue: grade.value, moduleId: grade.moduleId, userId: studentId })
      onClose()
    } catch (error: any) {
      setErrorMessage(error.message ?? 'Erro ao tentar criar nota')
    }
  }

  const isGradeNameValid = grade.name.length === 0 || grade.name.length >= 3
  const isGradeValueValid = grade.value >= 0 && grade.value <= 10
  const isSubmitButtonDisabled = grade.name.length === 0 || !isGradeValueValid || !isGradeNameValid
  return (
    <div className={Styles.modalWrap}>
      <h1>Atribuir nota para {studentName.split(' ')[0]}</h1>
      <form className={Styles.modalForm} onSubmit={handleCreateGrade}>
        <div className={Styles.inputsContainer}>
          <div className={`${Styles.inputWrap} ${Styles.inputGradeName}`}>
            <label htmlFor="grade-name">Nome</label>
            <input
              type="text"
              id="grade-name"
              placeholder='Nome da nota'
              autoComplete='off'
              value={grade.name}
              onChange={(e) => { setGrade({ ...grade, name: e.target.value }) }}
            />
            {!isGradeNameValid && <span className={Styles.nameErrorMessage}>O nome deve ter pelo menos 3 caracteres</span>}
          </div>
          <div className={Styles.gradeValueAndModuleWrap}>
            <div className={`${Styles.inputWrap} ${Styles.inputGradeValue}`}>
              <label htmlFor="grade-value">Nota:</label>
              <input
                type="number"
                id="grade-value"
                placeholder='valor de 0 a 10'
                autoComplete='off'
                value={grade.value}
                onChange={(e) => { setGrade({ ...grade, value: Number(e.target.value) }) }}
              />
              {!isGradeValueValid && <span className={Styles.nameErrorMessage}>A nota deve ter um valor de 0 a 10</span>}
            </div>
            <div className={`${Styles.inputWrap} ${Styles.inputGradeModule}`}>
              <label htmlFor="grade-module">Módulo:</label>
              <select id="selectModule" value={grade.moduleId} onChange={(e) => setGrade(prev => ({ ...prev, moduleId: e.target.value }))}>
                {modules.map((module, i) => {
                  return (
                    <option value={module.id} key={i}>{module.name}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
        <div className={Styles.btnContainer}>
          <button type='submit' disabled={isSubmitButtonDisabled}>Adicionar</button>
        </div>
        {errorMessage && <span className={Styles.errorMessage}>{errorMessage}</span>}
      </form>
    </div>
  )
}