import { SearchIcon } from '@/presentation/icons';
import Styles from './courses-styles.module.scss'
// import { PageLayout } from '@/presentation/layouts/PageLayout';

export function Courses() {
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
                <th>Professor</th>
                <th>Alunos</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className={Styles.tableBodyRow}>
                <td>Matemática</td>
                <td>Caua Carvalho</td>
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
              <tr className={Styles.tableBodyRow}>
                <td>História</td>
                <td>Davi Pereira</td>
                <td>20</td>
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
  )
}