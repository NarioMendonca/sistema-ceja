import { SearchIcon } from '@/presentation/icons';
import Styles from './users-styles.module.scss'
import { FetchUsers } from '@/domain/use-cases/fetch-users';
import { useEffect, useState } from 'react';
import { User } from '@/domain/models/User';

type Props = {
  fetchUsers: FetchUsers
}

export function Users({ fetchUsers }: Props) {
  const [users, setUsers] = useState<User[]>([])

  const handleFetchUsers = () => {
    fetchUsers.handle()
      .then((usersData) => {
        setUsers(usersData.users)
      })
  }

  useEffect(() => {
    handleFetchUsers()
  }, [])

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar Usuários</h2>
        <button>Adicionar usuário</button>
      </div>
      <section className={Styles.userListWrap}>
        <div className={Styles.searchCourseWrap}>
          <span>Buscar usuário</span>
          <div className={Styles.searchCourseInputWrap}>
            <span>{<SearchIcon />}</span>
            <input type="text" name="searchUser" id="searchUser" />
          </div>
        </div>
        <table className={Styles.userList}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Permissão</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className={Styles.tableBodyRow} key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
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