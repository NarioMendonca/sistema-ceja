import { useState } from 'react'
import Styles from './register-user-modal-styles.module.scss'
import { Input } from '@/presentation/components/Input'

type Props = {
  remoteRegisterUser: (user: any) => void
}

export function RegisterUserModal({ remoteRegisterUser }: Props) {
  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    role: 'STUDENT',
    cpf: ''
  })

  const handleRegisterUser = () => {
    remoteRegisterUser(user)
  }

  return (
    <div className={Styles.modalWrap}>
      <h1>Adicionar um usuário</h1>
      <form className={Styles.modalForm} onSubmit={handleRegisterUser}>
        <Input
          type='text'
          id='name'
          placeholder='Nome completo'
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          label='Nome completo'
          required
        />
        <Input
          type='text'
          id='email'
          placeholder='E-mail do usuário'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          label='E-mail'
          required
        />
        <Input
          type='text'
          id='cpf'
          placeholder='ex: 123.456.789-09 ou 12345678909'
          value={user.cpf}
          onChange={(e) => setUser({ ...user, cpf: e.target.value })}
          label='CPF (Opcional)'
          pattern="^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$"
        />
        <select id='userRole' value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
          <optgroup label='Permissão'>
            <option value='STUDENT'>Estudante</option>
            <option value='TEACHER'>Professor</option>
            <option value='ADMIN'>Admin</option>
          </optgroup>
        </select>
        {user.role === 'STUDENT' ?
          <>
            <Input
              type='text'
              id='enrollmentCode'
              placeholder='Matrícula do aluno'
              value={user.enrollmentCode}
              onChange={(e) => setUser({ ...user, enrollmentCode: e.target.value })}
              label='Matrícula do aluno'
              required
            />
            <Input
              type='text'
              id='dateOfBirth'
              placeholder='DD/MM/AAAA'
              value={user.dateOfBirth}
              onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
              label='Data de nascimento (opcional)'
            />
            <Input
              type='text'
              id='adress'
              placeholder='Endereço'
              value={user.adress}
              onChange={(e) => setUser({ ...user, adress: e.target.value })}
              label='Endereço (opcional)'
            />
          </>
          : user.role === 'TEACHER' ?
            <>
              <Input
                type='text'
                id='specialization'
                placeholder='Área de atuação do professor'
                value={user.specialization}
                onChange={(e) => setUser({ ...user, specialization: e.target.value })}
                label='Área de atuação'
                required
              />
              <Input
                type='text'
                id='education'
                placeholder='ex: Doutor, Mestre...'
                value={user.education}
                onChange={(e) => setUser({ ...user, education: e.target.value })}
                label='Especilização'
                required
              />
            </>
            :
            <Input
              type='text'
              id='position'
              placeholder='Cargo (ex: diretor, técnico)'
              value={user.position}
              onChange={(e) => setUser({ ...user, position: e.target.value })}
              label='Cargo'
              required
            />
        }
        <div className={Styles.btnContainer}>
          <button type='submit'>Criar usuário</button>
        </div>
      </form>
    </div>
  )
}