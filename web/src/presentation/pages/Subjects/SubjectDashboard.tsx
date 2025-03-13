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
import { FetchGradesByModule } from '@/domain/use-cases/grades/fetch-grades-by-module';
import { Grade } from '@/domain/models/Grade';
import { CreateGradeModal } from './components/CreateGradeModal';
import { CreateGrade } from '@/domain/use-cases/grades/create-grade';
import { FailedToLoadPage } from '@/presentation/pages/Errors/FailedToLoadPage';
import { Accordion } from '@/presentation/components/Accordion';

type Props = {
  remoteFetchStudentsBySubject: FetchStudentBySubject,
  remoteFetchModulesBySubject: FetchModulesBySubject
  remoteFetchGradesByModule: FetchGradesByModule
  createModule: CreateModule
  remoteCreateGrade: CreateGrade
}

type SelectedStudentParams = {
  name: string,
  id: string
}

export function SubjectDashboard({
  remoteFetchModulesBySubject,
  remoteFetchStudentsBySubject,
  createModule,
  remoteFetchGradesByModule,
  remoteCreateGrade
}: Props) {
  const location = useLocation()
  const subjectData = location.state
  const [modules, setModules] = useState<Module[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [selectedModule, setSelectedModule] = useState<string>('')
  const [createModuleModal, setCreateModuleModal] = useState<boolean>(false)
  const [createGradeModal, setCreateGradeModal] = useState<boolean>(false)
  const [selectedStudent, setSelectedStudent] = useState<SelectedStudentParams>({ id: '', name: '' })
  const [contentSelected, setContentSelected] = useState<'Students' | 'Modules'>('Students')
  const [studentsGrades, setStudentsGrades] = useState<Grade[]>([])
  const { auth } = useAuth()

  if (!subjectData) {
    return <FailedToLoadPage />
  }

  useEffect(() => {
    const fetchModules = async () => {
      const { modules } = await remoteFetchModulesBySubject.handle({ subjectId: subjectData.subjectId })
      setModules(modules)
      setSelectedModule(modules[0].id)
    }

    const fetchStudents = async () => {
      const { students } = await remoteFetchStudentsBySubject.handle({ subjectId: subjectData.subjectId })
      setStudents(students)
    }

    fetchModules()
    fetchStudents()
  }, [])

  useEffect(() => {
    const fetchGradesByModule = async () => {
      const { grades } = await remoteFetchGradesByModule.handle({ moduleId: selectedModule })
      setStudentsGrades(grades)
    }

    fetchGradesByModule()
  }, [selectedModule])

  const toggleCreateGradeModal = ({ id, name }: SelectedStudentParams) => {
    setSelectedStudent((prev) => ({ ...prev, id, name }))
    setCreateGradeModal(true)
  }

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>{auth.role === Role.admin ? 'Gerenciar' : 'Visualizar'} matéria de {subjectData.subjectTitle}</h2>
        {contentSelected === 'Modules' && <button onClick={() => { setCreateModuleModal(true) }}>Adicionar Módulo</button>}
      </div>
      <section className={Styles.modulesListWrap}>
        <div className={Styles.subjectFiltersWrap}>
          <div className={Styles.searchClassInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" id="searchUser" placeholder={contentSelected === 'Modules' ? 'Buscar módulo' : 'Buscar aluno'} />
          </div>
          <div className={Styles.subjectDataOptions}>
            {contentSelected === 'Students' &&
              <select id="selectModule" value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                {modules.map((module, i) => {
                  return (
                    <option value={module.id} key={i}>{module.name}</option>
                  )
                })}
              </select>
            }
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
                : modules.map((module, i) => {
                  return (
                    <div className={Styles.module} key={i}>
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
                  const studentGrades = studentsGrades.filter(grade => grade.user_id === student.id)
                  return (
                    <div>

                      <Accordion.Provider>
                        <Accordion.Header extraClassName={Styles.studentAccordionHeader}>
                          <div className={Styles.studentData}>
                            <div>
                              <span className={Styles.studentTitle}>{student.name}</span>
                            </div>
                            <span className={Styles.studentDescription}>{student.enrollmentCode}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Content extraClassName={Styles.studentAccordionContent}>
                          <div className={Styles.gradesWrap}>
                            {studentGrades.map((grade, i) => {
                              return (
                                <div className={Styles.grade} key={i}>{grade.name}: {grade.grade}</div>
                              )
                            })}
                          </div>
                          <div className={Styles.buttonWrap}>
                            <Button onClick={() => toggleCreateGradeModal({ id: student.id, name: student.name })}>
                              Adicionar nota
                            </Button>
                          </div>
                        </Accordion.Content>
                      </Accordion.Provider>
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
          subjectId={subjectData.subjectId}
          moduleListState={{ modules: modules, setModules: setModules }}
        />
      </Modal>
      <Modal isOpen={createGradeModal} onClose={() => { setCreateGradeModal(false) }}>
        <CreateGradeModal
          defaultModuleId={selectedModule}
          modules={modules}
          remoteCreateGrade={remoteCreateGrade}
          studentId={selectedStudent.id}
          studentName={selectedStudent.name}
        />
      </Modal>
    </main >
  )
}