import React, { useEffect, useState } from 'react'
import Styles from './register-teacher-subject-modal-styles.module.scss'
import { FetchUsers } from '@/domain/use-cases/users/fetch-users'
import { User, Role } from '@/domain/models/User'
import { RegisterSubjectTeacher } from '@/domain/use-cases/subjectTeacher/register-subject-teacher'
import { FetchSubjectTeacherBySubject } from '@/domain/use-cases/subjectTeacher/fetch-subject-teacher-by-subject'

type Props = {
  fetchUsers: FetchUsers
  subjectName: string
  subjectId: string
  registerSubjectTeacher: RegisterSubjectTeacher
  fetchSubjectTeacherBySubject: FetchSubjectTeacherBySubject
  onClose: () => void
}

export function RegisterTeacherOnSubjectModal({ fetchUsers, subjectName, subjectId, registerSubjectTeacher, fetchSubjectTeacherBySubject, onClose }: Props) {
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>('')
  const [teachersIdsAlreadyEnrolledInSubject, setTeachersIdsAlreadyEnrolledInSubject] = useState<string[]>([])
  const [teachers, setTeachers] = useState<User[]>([])

  const fetchTeachers = () => {
    fetchUsers.handle({ role: Role.teacher }).then(response => setTeachers(response.users))
  }

  const remoteFetchSubjectTeacherBySubject = () => {
    fetchSubjectTeacherBySubject.handle({ subjectId }).then((response) => {
      const teachersIds = response.subjectTeachers.map((subjectTeacher) => subjectTeacher.user_id)
      setTeachersIdsAlreadyEnrolledInSubject(teachersIds)
    })
  }

  const handleAddTeacherToSubject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    registerSubjectTeacher.handle({ userId: selectedTeacherId, subjectId }).then(() => {
      onClose()
    })
  }

  useEffect(() => {
    fetchTeachers()
    remoteFetchSubjectTeacherBySubject()
  }, [])

  return (
    <div className={Styles.modalWrap}>
      <h1>Editar matéria de {subjectName}</h1>
      <form className={Styles.modalForm} onSubmit={handleAddTeacherToSubject}>
        <div className={Styles.inputWrap}>
          <label htmlFor="subject-name">Professor:</label>
          <select onChange={(e) => setSelectedTeacherId(e.target.value)} value={selectedTeacherId} required>
            <optgroup>
              <option value="" disabled>Selecione um professor</option>
              {teachers.map(teacher => {
                const teacherIsAlreadyRegistered = teachersIdsAlreadyEnrolledInSubject.includes(teacher.id)
                if (!teacherIsAlreadyRegistered) {
                  return <option value={teacher.id} key={teacher.id}>{teacher.name}</option>
                }
              })}
            </optgroup>
          </select>
        </div>
        <div className={Styles.btnContainer}>
          <button type='submit'>Adicionar</button>
        </div>
      </form>
    </div>
  )
}