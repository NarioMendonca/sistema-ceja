import { SearchIcon } from '@/presentation/icons';
import Styles from './users-styles.module.scss'
import { FetchUsers } from '@/domain/use-cases/users/fetch-users';
import { useEffect, useState } from 'react';
import { User } from '@/domain/models/User';
import { useNavigate } from 'react-router';
import { Modal } from '@/presentation/components/Modal';
import { RegisterUserModal } from './RegisterUserModal';
import { RegisterUser } from '@/domain/use-cases/users/register-user';

type Props = {
  fetchUsers: FetchUsers,
  registerUser: RegisterUser
}

export function Users({ fetchUsers, registerUser }: Props) {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleFetchUsers = () => {
    fetchUsers.handle()
      .then((usersData) => {
        setUsers(usersData.users)
      })
  }

  const remoteRegisterUser = (user: any) => {
    registerUser.handle(user)
      .then(response => {
        setUsers([...users, { ...response.user }])
      })
  }

  const handleRedirectToViewUser = (userId: string) => {
    navigate('/usuarios/visualizar', { state: { userId } })
  }

  useEffect(() => {
    handleFetchUsers()
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Gerenciar Usuários</h2>
        <button onClick={openModal}>Adicionar usuário</button>
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
                <tr className={Styles.tableBodyRow} key={user.id} onClick={() => { handleRedirectToViewUser(user.id) }}>
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <RegisterUserModal remoteRegisterUser={remoteRegisterUser} />
      </Modal>
    </main>
  )
}