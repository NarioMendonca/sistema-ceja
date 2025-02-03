import Styles from './view-classes-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { useEffect, useState } from 'react';
import { Class } from '@/domain/models/Class';
import { FetchClassesBySubject } from '@/domain/use-cases/classes/fetch-classes-by-subject';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

type Props = {
  fetchClassesBySubject: FetchClassesBySubject
}

type handleRedirectToUserViewParams = {
  classId: string,
  className: string
}


export function ViewClasses({ fetchClassesBySubject }: Props) {
  const navigate = useNavigate()
  const locate = useLocation()
  const [classes, setClasses] = useState<Class[]>([])

  const handleFetchClassesBySubject = () => {
    const subjectId = locate.state.subjectId
    fetchClassesBySubject.handle({ subjectId })
      .then((response) => {
        setClasses(response.classes)
      })
  }

  const handleRedirectToUserView = ({ classId, className }: handleRedirectToUserViewParams) => {
    navigate('/classes/estudantes', { state: { classId, className } })
  }

  useEffect(() => {
    handleFetchClassesBySubject()
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
    </main>
  )
}