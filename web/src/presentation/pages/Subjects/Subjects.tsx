import Styles from './subjects-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { FetchSubjects } from '@/domain/use-cases/subjects/fetch-subjects';
import { Subject } from '@/domain/models/Subject';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '@/presentation/components/Modal';
import { CreateSubjectModal } from './components/CreateSubjectModal';
import { CreateSubject } from '@/domain/use-cases/subjects/create-subject';

type Props = {
  fetchSubjects: FetchSubjects,
  createSubject: CreateSubject
}

export function Subjects({ fetchSubjects, createSubject }: Props) {
  const navigate = useNavigate()
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleFetchSubjects = () => {
    fetchSubjects.handle()
      .then((response) => {
        setSubjects(response.subjects)
      })
  }

  const handleRedirectToClassesViewBySubject = (subjectId: string) => {
    navigate('/materia/classes', { state: { subjectId } })
  }

  const handleAddSubject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subjectName = (event.currentTarget.elements.namedItem('subject-name') as HTMLInputElement).value
    createSubject.handle({ title: subjectName }).then((response) => console.log(response))
  }

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
                <tr className={Styles.tableBodyRow} key={subject.id} onClick={() => { handleRedirectToClassesViewBySubject(subject.id) }}>
                  <td>{subject.title}</td>
                  <td>Caua Carvalho</td>
                  <td>5</td>
                  <td>
                    <div onClick={e => e.stopPropagation()}>
                      <button className={Styles.editButton}>
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
    </main>
  )
}