import Styles from './subjects-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { FetchSubjects } from '@/domain/use-cases/subjects/fetch-subjects';
import { Subject } from '@/domain/models/Subject';
import React, { useEffect, useState } from 'react';
import { Modal } from '@/presentation/components/Modal';
import { CreateSubjectModal } from './components/CreateSubjectModal';
import { CreateSubject } from '@/domain/use-cases/subjects/create-subject';
import { RegisterTeacherOnSubjectModal } from './components/EditSubjectModal';
import { FetchUsers } from '@/domain/use-cases/users/fetch-users';
import { RegisterSubjectTeacher } from '@/domain/use-cases/subjectTeacher/register-subject-teacher';
import { FetchSubjectTeacherBySubject } from '@/domain/use-cases/subjectTeacher/fetch-subject-teacher-by-subject';
import { useNavigate } from 'react-router-dom';

type Props = {
  fetchUsers: FetchUsers
  fetchSubjects: FetchSubjects,
  createSubject: CreateSubject,
  registerSubjectTeacher: RegisterSubjectTeacher
  fetchSubjectTeacherBySubject: FetchSubjectTeacherBySubject
}

type AddTeacherModalProps = {
  isOpen: boolean,
  subjectName: string,
  subjectId: string
}

export function Subjects({ fetchUsers, fetchSubjectTeacherBySubject, fetchSubjects, createSubject, registerSubjectTeacher }: Props) {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [addTeacherToSubjectModal, setAddTeacherToSubjectModal] = useState<AddTeacherModalProps>({
    isOpen: false,
    subjectName: '',
    subjectId: ''
  })
  const navigate = useNavigate()

  const handleFetchSubjects = () => {
    fetchSubjects.handle()
      .then((response) => {
        setSubjects(response.subjects)
      })
  }

  const handleAddSubject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subjectName = (event.currentTarget.elements.namedItem('subject-name') as HTMLInputElement).value
    createSubject.handle({ title: subjectName }).then((response) => console.log(response))
  }

  const redirectToSubjectModules = (params: { subjectId: string, subjectTitle: string }) => {
    navigate('/materias/modulos', { state: { subjectId: params.subjectId, subjectTitle: params.subjectTitle } })
  }

  const openAddTeacherModal = (subjectName: string, subjectId: string) => {
    setAddTeacherToSubjectModal({ ...addTeacherToSubjectModal, isOpen: true, subjectName, subjectId })
  }
  const closeAddTeacherModal = () => setAddTeacherToSubjectModal({ ...addTeacherToSubjectModal, isOpen: false })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    handleFetchSubjects()
  }, [])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar Matérias</h2>
        <button onClick={openModal}>Adicionar matéria</button>
      </div>
      <section className={Styles.subjectListWrap}>
        <div className={Styles.searchSubjectWrap}>
          <span>Buscar matéria</span>
          <div className={Styles.searchSubjectInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <table className={Styles.subjectList}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Professor(es)</th>
              <th>Turmas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(subject => {
              return (
                <tr className={Styles.tableBodyRow} key={subject.id} onClick={() => { redirectToSubjectModules({ subjectId: subject.id, subjectTitle: subject.name }) }}>
                  <td>{subject.name}</td>
                  <td>Caua Carvalho</td>
                  <td>5</td>
                  <td>
                    <div onClick={e => e.stopPropagation()}>
                      <button className={Styles.editButton} onClick={() => { openAddTeacherModal(subject.name, subject.id) }}>
                        Editar
                      </button>
                      <button className={Styles.deleteButton}>
                        Deletar
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateSubjectModal handleAddSubject={handleAddSubject} />
      </Modal>
      <Modal onClose={closeAddTeacherModal} isOpen={addTeacherToSubjectModal.isOpen}>
        <RegisterTeacherOnSubjectModal
          subjectName={addTeacherToSubjectModal.subjectName}
          fetchUsers={fetchUsers}
          registerSubjectTeacher={registerSubjectTeacher}
          fetchSubjectTeacherBySubject={fetchSubjectTeacherBySubject}
          subjectId={addTeacherToSubjectModal.subjectId}
          onClose={closeAddTeacherModal}
        />
      </Modal>
    </main>
  )
}