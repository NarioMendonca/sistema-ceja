import { PageLayout } from "@/presentation/layouts/PageLayout";
import { MainHeader } from "./components/MainHeader";
import Styles from './grades-management-styles.module.scss'
import { SearchIcon } from "@/presentation/icons";

export function GradesManagement() {
  return (
    <PageLayout>
      <MainHeader />
      <section className={Styles.studentsListWrap}>
        <div className={Styles.searchStudentWrap}>
          <span>buscar aluno</span>
          <div className={Styles.searchStudentInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <div className={Styles.evaluationCriteaWrap}>
          <button>Critérios de avaliação</button>
        </div>
        <table className={Styles.studentsList}>
          <thead>
            <tr>
              <th>Matricula</th>
              <th>Aluno</th>
              <th>Média</th>
            </tr>
          </thead>
          <tbody>
            <tr className={Styles.tableBodyRow}>
              <td>313131</td>
              <td>Cleudo Paiva Gayzerra</td>
              <td>9.2</td>
            </tr>
            <tr className={Styles.tableBodyRow}>
              <td>812414</td>
              <td>Daniele Enerico</td>
              <td>8.9</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PageLayout>
  )
}