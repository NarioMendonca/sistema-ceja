import { SearchIcon } from '@/presentation/icons';
import Styles from './users-styles.module.scss'
import { Header, Sidebar } from "@/presentation/components";

export function Users() {
  return (
    <div className={Styles.dashboardContainer}>
      <Header />
      <Sidebar />

      <main>
        <div className={Styles.mainHeaderWrap}>
          <h2>Gerenciar usuários</h2>
          <button>Adicionar usuário</button>
        </div>
        <section className={Styles.userListWrap}>
          <div className={Styles.searchCourseWrap}>
            <span>buscar usuário</span>
            <div className={Styles.searchCourseInputWrap}>
              <span>{<SearchIcon />}</span>
              <input type="text" name="searchUser" id="searchUser" />
            </div>
          </div>
          <table className={Styles.userList}>
            <thead>
              <tr>
                <th>nome</th>
                <th>email</th>
                <th>Permissão</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José Cleudo Paiva Bezerra Junior</td>
                <td>cleudinhoFrifas@gmail.com</td>
                <td>Admin</td>
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