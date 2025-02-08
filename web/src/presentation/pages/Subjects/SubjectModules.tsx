import Styles from './subject-modules-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { useEffect, useState } from 'react';
import { CreateModule, FetchModulesBySubject } from '@/domain/use-cases/modules';
import { Module } from '@/domain/models/Module';
import { useLocation } from 'react-router';
import { Modal } from '@/presentation/components/Modal';
import { CreateModuleModal } from './components/CreateModuleSubject';

type Props = {
  fetchModulesBySubject: FetchModulesBySubject
  createModule: CreateModule
}

export function SubjectModules({ fetchModulesBySubject, createModule }: Props) {
  const location = useLocation()
  const { subjectId, subjectTitle } = location.state
  const [modules, setModules] = useState<Module[]>([])
  const [createModuleModal, setCreateModuleModal] = useState<boolean>(false)

  const handleFetchClasses = () => {
    fetchModulesBySubject.handle({ subjectId })
      .then((response) => {
        setModules(response.modules)
      })
  }
  useEffect(() => {
    handleFetchClasses()
  }, [])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar módulos de {subjectTitle}</h2>
        <button onClick={() => { setCreateModuleModal(true) }}>Adicionar Módulo</button>
      </div>
      <section className={Styles.modulesListWrap}>
        <div className={Styles.searchClassWrap}>
          <span>Buscar Módulo</span>
          <div className={Styles.searchClassInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <div className={Styles.modulesList}>
          {modules.map(module => {
            return (
              <div className={Styles.module} key={module.id}>
                <div>
                  <span className={Styles.moduleTitle}>{module.name}</span>
                </div>
                <span className={Styles.moduleDescription}>{module.description}</span>
              </div>
            )
          })}
        </div>
      </section>
      <Modal isOpen={createModuleModal} onClose={() => { setCreateModuleModal(false) }}>
        <CreateModuleModal
          createModule={createModule}
          subjectId={subjectId}
          moduleListState={{ modules: modules, setModules: setModules }}
        />
      </Modal>
    </main>
  )
}