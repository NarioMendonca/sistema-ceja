import Styles from './subject-modules-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { useEffect, useState } from 'react';
import { FetchModulesBySubject } from '@/domain/use-cases/modules';
import { Module } from '@/domain/models/Module';
import { useLocation } from 'react-router';

type Props = {
  fetchModulesBySubject: FetchModulesBySubject
}

export function SubjectModules({ fetchModulesBySubject }: Props) {
  const location = useLocation()
  const { subjectId, subjectTitle } = location.state
  const [modules, setModules] = useState<Module[]>([])

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
        <button>Adicionar Módulo</button>
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
    </main>
  )
}