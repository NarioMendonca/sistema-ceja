export type AccountModel = {
  token: string,
  role: UserRoles
}

export type User = {
  id: string
  email: string
  password_hash: string
  name: string
  role: UserRoles
  cpf?: string
  created_at: Date
  updated_at: Date
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

export type UserRoles = UserRolesEnum.admin | UserRolesEnum.teacher | UserRolesEnum.student

export enum UserRolesEnum {
  admin = 'ADMIN',
  teacher = 'TEACHER',
  student = 'STUDENT'
}