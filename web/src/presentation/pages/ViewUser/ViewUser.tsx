import Styles from './view-user-styles.module.scss'
import { useEffect, useState } from 'react';
import { Administrator, Student, Teacher } from '@/domain/models/User';
import { GetUser } from '@/domain/use-cases/users/get-user';
import { formatDate } from '@/presentation/lib/format-date';

type Props = {
  getUser: GetUser
}

type User =
  | { role: 'STUDENT', userData: Student }
  | { role: 'TEACHER', userData: Teacher }
  | { role: 'ADMIN', userData: Administrator }

export function ViewUser({ getUser }: Props) {
  const [user, setUser] = useState<User | null>(null)

  const handleGetUser = () => {
    const userId = '94e46c2d-1fdf-4e6c-b6c8-7b84a12eeecb'
    getUser.handle({ id: userId })
      .then((userData) => {
        if (!userData.user) {
          setUser(null)
          return
        }
        let userDataWithDiscriminatedRole: User
        if (userData.user.role === 'STUDENT') {
          userDataWithDiscriminatedRole = {
            role: userData.user.role,
            userData: userData.user as Student
          }
        } else if (userData.user.role === 'TEACHER') {
          userDataWithDiscriminatedRole = {
            role: userData.user.role,
            userData: userData.user as Teacher
          }
        } else {
          userDataWithDiscriminatedRole = {
            role: userData.user.role,
            userData: userData.user as Administrator
          }
        }
        setUser(userDataWithDiscriminatedRole)
      })
  }

  useEffect(() => {
    handleGetUser()
  }, [])

  const dataNotFoundMessage = 'Não informado'

  return (
    <main>
      <div className={Styles.mainHeaderWrap}>
        <h2>Vizualizar Usuário</h2>
        <button>Editar Informações</button>
      </div>
      <div className={Styles.userInfoHeader}>
        Informações do usuário
      </div>
      <section className={Styles.userInfo}>
        {user?.userData ?
          <>
            <div><span>Nome:</span> {user.userData.name}</div>
            <div><span>Email:</span> {user.userData.email}</div>
            <div><span>Permissão:</span> {user.userData.role === 'STUDENT' ? 'Aluno' : user.userData.role === 'TEACHER' ? 'Professor' : 'Administrador'}</div>
            <div><span>CPF:</span> {user.userData.cpf}</div>
            <div><span>Data de registro:</span> {formatDate(user.userData.created_at)}</div>
            {user?.role === 'STUDENT' ?
              <>
                <div><span>Matricula:</span> {user.userData.enrollmentCode ?? dataNotFoundMessage}</div>
                <div><span>Endereço:</span> {user.userData.adress ?? dataNotFoundMessage}</div>
                <div><span>Data de nascimento:</span> {user.userData.dateOfBirth ? formatDate(user.userData.dateOfBirth) : dataNotFoundMessage}</div>
              </> :
              user?.role === 'TEACHER' ?
                <>
                  <div><span>Qualificação:</span> {user.userData.education}</div>
                  <div><span>Área:</span> {user.userData.specialization}</div>
                </> :
                user?.role === 'ADMIN' ?
                  <div><span>Cargo:</span> {user.userData.position}</div> :
                  ''}
          </>
          : <div className={Styles.notFoundMessage}>Usuário não encontrado</div>}
      </section>
    </main>
  )
}