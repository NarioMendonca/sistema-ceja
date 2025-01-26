export type AccountModel = {
  acessToken: string
}

export type User = {
  id: string
  email: string
  password_hash: string
  name: string
  role: 'ADMIN' | 'TEACHER' | 'STUDENT'
  cpf?: string
  created_at?: Date
  updated_at?: Date
}

export type Student = User & {
  enrollmentCode: string
  dateOfBirth?: Date
  adress?: string
}

export type Teacher = User & {
  specialization: string
  education: string
}

export type Administrator = User & {
  position: string
}

export type UsersMetrics = {
  users: number,
  students: number,
  teachers: number
}

export type UserWithoutPasswordHash = Omit<User, 'password_hash'>

export enum UserRoles {
  admin = 'ADMIN',
  teacher = 'TEACHER',
  student = 'STUDENT',
}
