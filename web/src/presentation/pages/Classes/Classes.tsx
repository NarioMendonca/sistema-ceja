import Styles from './classes-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { useEffect, useState } from 'react';
import { FetchClasses } from '@/domain/use-cases/classes/fetch-classes';
import { Class } from '@/domain/models/Class';
import { Modal } from '@/presentation/components/Modal';
import { CreateClassModal } from './components/CreateClassesModal';
import { CreateClass } from '@/domain/use-cases/classes/create-class';

type Props = {
  fetchClasses: FetchClasses
  remoteCreateClass: CreateClass
}

export function Classes({ fetchClasses, remoteCreateClass }: Props) {
  const [classes, setClasses] = useState<Class[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleFetchClasses = () => {
    fetchClasses.handle()
      .then((response) => {
        setClasses(response.classes)
      })
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleAddClass = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nameToClass = (event.currentTarget.elements.namedItem('class-name') as HTMLInputElement).value
    remoteCreateClass.handle({ name: nameToClass }).then(response => {
      setClasses([...classes, { ...response.class }])
      closeModal()
    })
  }

  useEffect(() => {
    handleFetchClasses()
  }, [])


  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar Turmas</h2>
        <button onClick={openModal}>Adicionar turma</button>
      </div>
      <section className={Styles.classListWrap}>
        <div className={Styles.searchClassWrap}>
          <span>Buscar turma</span>
          <div className={Styles.searchClassInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <table className={Styles.classList}>
          <thead>
            <tr>
              <th>Turma</th>
              <th>Matérias</th>
              <th>Alunos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map(classData => {
              return (
                <tr className={Styles.tableBodyRow} key={classData.id}>
                  <td>{classData.name}</td>
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
        <CreateClassModal handleAddClass={handleAddClass} />
      </Modal>
    </main>
  )
}