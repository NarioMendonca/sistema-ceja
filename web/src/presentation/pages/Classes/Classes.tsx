import Styles from './classes-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { useEffect, useState } from 'react';
import { FetchClasses } from '@/domain/use-cases/classes/fetch-classes';
import { Class } from '@/domain/models/Class';
import { useNavigate } from 'react-router';

type Props = {
  fetchClasses: FetchClasses
}

type handleRedirectToUserViewParams = {
  classId: string,
  className: string
}

export function Classes({ fetchClasses }: Props) {
  const navigate = useNavigate()
  const [classes, setClasses] = useState<Class[]>([])

  const handleFetchClasses = () => {
    fetchClasses.handle()
      .then((response) => {
        setClasses(response.classes)
      })
  }

  const handleRedirectToUserView = ({ classId, className }: handleRedirectToUserViewParams) => {
    navigate('/classes/students', { state: { classId, className } })
  }

  useEffect(() => {
    handleFetchClasses()
  }, [])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar Turmas</h2>
        <button>Adicionar turma</button>
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
                <tr className={Styles.tableBodyRow} key={classData.id} onClick={() => { handleRedirectToUserView({ classId: classData.id, className: classData.name }) }}>
                  <td>{classData.name}</td>
                  <td>Caua Carvalho</td>
                  <td>5</td>
                  <td>
                    <div>
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
    </main>
  )
}