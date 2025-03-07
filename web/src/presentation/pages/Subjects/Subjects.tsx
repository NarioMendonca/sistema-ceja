import React, { useEffect, useState } from 'react';
import Styles from './subjects-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { FetchSubjects } from '@/domain/use-cases/subjects/fetch-subjects';
import { Subject } from '@/domain/models/Subject';
import { FetchUsers } from '@/domain/use-cases/users/fetch-users';
import { Modal } from '@/presentation/components/Modal';
import { CreateSubjectModal } from './components/CreateSubjectModal';
import { CreateSubject } from '@/domain/use-cases/subjects/create-subject';
import { RegisterTeacherOnSubjectModal } from './components/EditSubjectModal';
import { RegisterSubjectTeacher } from '@/domain/use-cases/subjectTeacher/register-subject-teacher';
import { FetchSubjectTeacherBySubject } from '@/domain/use-cases/subjectTeacher/fetch-subject-teacher-by-subject';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/presentation/hooks/useAuth';
import { Role } from '@/domain/models/User';
import { FetchSubjectsByUserId } from '@/domain/use-cases/subjectTeacher/fetch-subjects-by-user-id';

type Props = {
  fetchUsers: FetchUsers
  fetchSubjects: FetchSubjects,
  createSubject: CreateSubject,
  registerSubjectTeacher: RegisterSubjectTeacher
  fetchSubjectTeacherBySubject: FetchSubjectTeacherBySubject
  remoteFetchSubjectsByUser: FetchSubjectsByUserId
}

type AddTeacherModalProps = {
  isOpen: boolean,
  subjectName: string,
  subjectId: string
}

export function Subjects({
  fetchUsers,
  fetchSubjectTeacherBySubject,
  fetchSubjects,
  createSubject,
  registerSubjectTeacher,
  remoteFetchSubjectsByUser
}: Props) {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [addTeacherToSubjectModal, setAddTeacherToSubjectModal] = useState<AddTeacherModalProps>({
    isOpen: false,
    subjectName: '',
    subjectId: ''
  })
  const navigate = useNavigate()
  const { auth } = useAuth()


  const handleAddSubject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subjectName = (event.currentTarget.elements.namedItem('subject-name') as HTMLInputElement).value
    createSubject.handle({ title: subjectName }).then((response) => console.log(response))
  }

  const redirectToSubjectDashboard = (params: { subjectId: string, subjectTitle: string }) => {
    navigate('/materias/modulos', { state: { subjectId: params.subjectId, subjectTitle: params.subjectTitle } })
  }

  const openAddTeacherModal = (subjectName: string, subjectId: string) => {
    setAddTeacherToSubjectModal({ ...addTeacherToSubjectModal, isOpen: true, subjectName, subjectId })
  }
  const closeAddTeacherModal = () => setAddTeacherToSubjectModal({ ...addTeacherToSubjectModal, isOpen: false })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const handleFetchSubjects = async () => {
      const { subjects } = await fetchSubjects.handle()
      setSubjects(subjects)
    }

    const handleFetchSubjectsByUserId = async () => {
      try {
        const { subjects } = await remoteFetchSubjectsByUser.handle({ userId: auth.user?.id! })
        setSubjects(subjects)
      } catch (err) {
        console.error(err)
      }
    }

    auth.role === Role.admin ? handleFetchSubjects() : handleFetchSubjectsByUserId()
  }, [])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>{auth.role === Role.teacher ? 'Suas Matérias' : 'Gerenciar Matérias'}</h2>
        {auth.role === Role.admin && <button onClick={openModal}>Adicionar matéria</button>}
      </div>
      <section className={Styles.subjectListWrap}>
        {auth.role === Role.admin && (
          <div className={Styles.searchSubjectWrap}>
            <span>Buscar matéria</span>
            <div className={Styles.searchSubjectInputWrap}>
              <span>{<SearchIcon />}</span>
              <input type="text" name="searchUser" id="searchUser" />
            </div>
          </div>
        )}
        <table className={Styles.subjectList}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Professor(es)</th>
              <th>Modulos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(subject => {
              return (
                <tr className={Styles.tableBodyRow} key={subject.id} onClick={() => { redirectToSubjectDashboard({ subjectId: subject.id, subjectTitle: subject.name }) }}>
                  <td>{subject.name}</td>
                  <td>Caua Carvalho</td>
                  <td>5</td>
                  <td>
                    {auth.role === Role.admin && (
                      <div onClick={e => e.stopPropagation()}>
                        <button className={Styles.editButton} onClick={() => { openAddTeacherModal(subject.name, subject.id) }}>
                          Editar
                        </button>
                        <button className={Styles.deleteButton}>
                          Deletar
                        </button>
                      </div>
                    )}
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