import { SearchIcon } from '@/presentation/icons';
import Styles from './courses-styles.module.scss'
import { Header, Sidebar } from "@/presentation/components";

export function Courses() {
  return (
    <div className={Styles.dashboardContainer}>
      <Header />
      <Sidebar />

      <main>
        <div className={Styles.mainHeaderWrap}>
          <h2>Gerenciar Matérias</h2>
          <button>Adicionar matéria</button>
        </div>
        <section className={Styles.couseListWrap}>
          <div className={Styles.searchCourseWrap}>
            <span>buscar matéria</span>
            <div className={Styles.searchCourseInputWrap}>
              <span>{<SearchIcon />}</span>
              <input type="text" name="searchUser" id="searchUser" />
            </div>
          </div>
          <table className={Styles.courseList}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Professor</th>
                <th>Alunos</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matemática</td>
                <td>Caua Lima Andrade</td>
                <td>25</td>
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
              <tr>
                <td>Matemática</td>
                <td>José Cleudo Paiva Bezerra Junior</td>
                <td>25</td>
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
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}