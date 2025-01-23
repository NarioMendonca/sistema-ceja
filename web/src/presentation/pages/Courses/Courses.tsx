import Styles from './courses-styles.module.scss'
import { SearchIcon } from '@/presentation/icons';
import { FetchSubjects } from '@/domain/use-cases/subjects/fetch-subjects';
import { Subject } from '@/domain/models/Subject';
import { useEffect, useState } from 'react';
// import { PageLayout } from '@/presentation/layouts/PageLayout';

type Props = {
  fetchSubjects: FetchSubjects
}

export function Courses({ fetchSubjects }: Props) {
  const [subjects, setSubjects] = useState<Subject[]>([])

  const handleFetchSubjects = () => {
    fetchSubjects.handle()
      .then((response) => {
        setSubjects(response.subjects)
      })
  }

  useEffect(() => {
    handleFetchSubjects()
  }, [])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar Matérias</h2>
        <button>Adicionar matéria</button>
      </div>
      <section className={Styles.couseListWrap}>
        <div className={Styles.searchCourseWrap}>
          <span>Buscar matéria</span>
          <div className={Styles.searchCourseInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <table className={Styles.courseList}>
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
                <tr className={Styles.tableBodyRow} key={subject.id}>
                  <td>{subject.title}</td>
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