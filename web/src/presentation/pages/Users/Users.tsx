import { SearchIcon } from '@/presentation/icons';
import Styles from './users-styles.module.scss'
import { PageLayout } from '@/presentation/layouts/PageLayout';

export function Users() {
  return (
    <PageLayout>
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
              <td>Rogerio Tech</td>
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
            <tr>
              <td>Armando da Silva</td>
              <td>cleudinhoFrifas@gmail.com</td>
              <td>Professor</td>
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
              <td>Pedro Carvalho Alves</td>
              <td>cleudinhoFrifas@gmail.com</td>
              <td>Aluno</td>
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
              <td>Roger da paz</td>
              <td>cleudinhoFrifas@gmail.com</td>
              <td>Aluno</td>
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
              <td>Gabriel Sovares</td>
              <td>cleudinhoFrifas@gmail.com</td>
              <td>Aluno</td>
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
    </PageLayout>
  )
}