import { Administrator, Student, Teacher } from "@/domain/models/User"

export interface RegisterUser {
  handle(params: RegisterUser.Params): Promise<RegisterUser.Model>
}

export namespace RegisterUser {
  export type Params = {
    name: string,
    email: string,
    role: 'ADMIN' | 'TEACHER' | 'STUDENT',
    cpf?: string,
    enrollmentCode?: string,
    dateOfBirth?: Date,
    adress?: string,
    specialization?: string,
    education?: string,
    position?: string
  }

  export type Model = {
    user: Administrator | Teacher | Student
  }
}