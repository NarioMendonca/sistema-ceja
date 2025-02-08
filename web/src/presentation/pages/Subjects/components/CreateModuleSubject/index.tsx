import React, { useState } from 'react'
import Styles from './create-module-modal-styles.module.scss'
import { CreateModule } from '@/domain/use-cases/modules'
import { useModalContext } from '@/presentation/components/Modal'
import { Module } from '@/domain/models/Module'

type ModuleListStateProps = {
  modules: Module[],
  setModules: React.Dispatch<React.SetStateAction<Module[]>>
}

type Props = {
  createModule: CreateModule
  subjectId: string,
  moduleListState: ModuleListStateProps
}

export function CreateModuleModal({ createModule, subjectId, moduleListState }: Props) {
  const [moduleName, setModuleName] = useState<string>('')
  const [moduleDescription, setModuleDescription] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { onClose } = useModalContext()

  const handleCreateModule = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (moduleName.length < 3) {
      throw new Error('O nome do módulo tem menos de 3 caracteres!')
    }
    createModule.handle({ name: moduleName, subjectId, description: moduleDescription ?? undefined })
      .then(response => {
        const { modules, setModules } = moduleListState
        setModules([...modules, response.module])
        onClose()
      }).catch(error => {
        const errorMessage = error.message || 'Algo de errado aconteceu. Tente novamente mais tarde.'
        setErrorMessage(errorMessage)
      })
  }

  const isModuleNameValid = moduleName.length === 0 || moduleName.length >= 3
  const isModuleDescriptionValid = moduleDescription.length === 0 || moduleDescription.length >= 4
  const isSubmitButtonDisabled = moduleName.length === 0 || !isModuleNameValid || !isModuleDescriptionValid
  return (
    <div className={Styles.modalWrap}>
      <h1>Adicionar um módulo</h1>
      <form className={Styles.modalForm} onSubmit={handleCreateModule}>
        <div className={Styles.inputWrap}>
          <label htmlFor="module-name">Nome</label>
          <input
            type="text"
            id="module-name"
            placeholder='nome do módulo'
            autoComplete='off'
            value={moduleName}
            onChange={(e) => { setModuleName(e.target.value) }}
          />
          {!isModuleNameValid && <span className={Styles.nameErrorMessage}>O nome deve ter pelo menos 3 caracteres!</span>}
        </div>
        <div className={Styles.inputWrap}>
          <label htmlFor="module-description">Descrição</label>
          <input
            type="text"
            id="module-name"
            placeholder='Descrição do módulo'
            autoComplete='off'
            value={moduleDescription}
            onChange={(e) => { setModuleDescription(e.target.value) }}
          />
          {!isModuleDescriptionValid && <span className={Styles.nameErrorMessage}>A descrição deve ter pelo menos 4 caracteres!</span>}
        </div>
        <div className={Styles.btnContainer}>
          <button type='submit' disabled={isSubmitButtonDisabled}>Adicionar</button>
        </div>
        {errorMessage && <span className={Styles.errorMessage}>{errorMessage}</span>}
      </form>
    </div>
  )
}