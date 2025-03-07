import Styles from './subject-dashboard-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { useEffect, useState } from 'react';
import { CreateModule, FetchModulesBySubject } from '@/domain/use-cases/modules';
import { Module } from '@/domain/models/Module';
import { useLocation } from 'react-router-dom';
import { Modal } from '@/presentation/components/Modal';
import { CreateModuleModal } from './components/CreateModuleSubject';
import useAuth from '@/presentation/hooks/useAuth';
import { Role, Student } from '@/domain/models/User';
import { Button } from '@/presentation/components/Button';
import { FetchStudentBySubject } from '@/domain/use-cases/enrollments/fetch-student-by-subject';

type Props = {
  remoteFetchStudentsBySubject: FetchStudentBySubject,
  remoteFetchModulesBySubject: FetchModulesBySubject
  createModule: CreateModule
}

export function SubjectDashboard({ remoteFetchModulesBySubject, remoteFetchStudentsBySubject, createModule }: Props) {
  const location = useLocation()
  const { subjectId, subjectTitle } = location.state
  const [modules, setModules] = useState<Module[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [createModuleModal, setCreateModuleModal] = useState<boolean>(false)
  const [contentSelected, setContentSelected] = useState<'Students' | 'Modules'>('Students')
  const { auth } = useAuth()

  useEffect(() => {
    const fetchModules = async () => {
      const { modules } = await remoteFetchModulesBySubject.handle({ subjectId })
      setModules(modules)
    }

    const fetchStudents = async () => {
      const { students } = await remoteFetchStudentsBySubject.handle({ subjectId })
      setStudents(students)
    }
    contentSelected === 'Modules' ? fetchModules() : fetchStudents()
  }, [contentSelected])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>{auth.role === Role.admin ? 'Gerenciar' : 'Visualizar'} matéria de {subjectTitle}</h2>
        {contentSelected === 'Modules' && <button onClick={() => { setCreateModuleModal(true) }}>Adicionar Módulo</button>}
      </div>
      <section className={Styles.modulesListWrap}>
        <div className={Styles.subjectFiltersWrap}>
          <div className={Styles.searchClassInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" id="searchUser" placeholder={contentSelected === 'Modules' ? 'Buscar módulo' : 'Buscar aluno'} />
          </div>
          <div className={Styles.subjectDataOptions}>
            <Button
              extraClassName={contentSelected === 'Students' ? Styles.selected : ''}
              onClick={() => setContentSelected('Students')}
            >
              Visulizar alunos
            </Button>
            <Button
              extraClassName={contentSelected === 'Modules' ? Styles.selected : ''}
              onClick={() => setContentSelected('Modules')}
            >
              Visualizar módulos
            </Button>
          </div>
        </div>
        <div className={Styles.modulesList}>
          {contentSelected === 'Modules'
            ? (
              modules.length === 0
                ? <h2>Nenhum módulo encontrado</h2>
                : modules.map(module => {
                  return (
                    <div className={Styles.module} key={module.id}>
                      <div>
                        <span className={Styles.moduleTitle}>{module.name}</span>
                      </div>
                      <span className={Styles.moduleDescription}>{module.description}</span>
                    </div>
                  )
                })
            ) : (
              students.length === 0
                ? <h2>Nenhum estudante encontrado</h2>
                : students.map(student => {
                  return (
                    <div className={Styles.module} key={student.id}>
                      <div>
                        <span className={Styles.moduleTitle}>{student.name}</span>
                      </div>
                      <span className={Styles.moduleDescription}>{student.enrollmentCode}</span>
                    </div>
                  )
                })
            )
          }
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