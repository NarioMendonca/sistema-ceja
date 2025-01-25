import { SearchIcon } from '@/presentation/icons'
import Styles from './view-class-styles.module.scss'
import { useLocation } from 'react-router'
import { FetchStudentsByClass } from '@/domain/use-cases/enrollments/fetch-students-by-class'
import { useEffect, useState } from 'react'
import { Student } from '@/domain/models/User'

type Props = {
  fetchStudentsByClass: FetchStudentsByClass
}

export function ViewClass({ fetchStudentsByClass }: Props) {
  const [students, setStudents] = useState<Student[]>([])

  const location = useLocation()
  const classData = location.state

  const remoteFetchStudentsByClass = () => {
    const classId: string = classData.classId || ''
    fetchStudentsByClass.handle({ classId })
      .then(response => setStudents(response.students))
  }

  useEffect(() => {
    remoteFetchStudentsByClass()
  }, [])

  console.log('requisitei!')

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Vizualizando {classData.className}</h2>
        <button>Adicionar aluno a turma</button>
      </div>
      <section className={Styles.viewClassListWrap}>
        <div className={Styles.searchStudentWrap}>
          <span>Buscar Aluno</span>
          <div className={Styles.searchStudentInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <table className={Styles.studentsList}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Matrícula</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => {
              return (
                <tr className={Styles.tableBodyRow} key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.enrollmentCode}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </main>
  )
}