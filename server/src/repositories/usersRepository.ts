import type { Administrator, Student, Teacher, User, UserRoles } from '@/models/User'

export type CreateBaseUserInput = {
	name: string
	email: string
	password_hash: string
	role: UserRoles
	cpf: string | null
}

export type CreateStudentInput = CreateBaseUserInput & {
	enrollmentCode: string
	dateOfBirth: Date | null
	adress: string | null
}

export type CreateTeacherInput = CreateBaseUserInput & {
	specialization: string
	education: string
}

export type CreateAdminInput = CreateBaseUserInput & {
	position: string
}

export interface UsersRepository {
	createBaseUser(data: CreateBaseUserInput): Promise<User>
	createStudent(data: CreateStudentInput): Promise<Student>
	CreateTeacher(data: CreateTeacherInput): Promise<Teacher>
	CreateAdmin(data: CreateAdminInput): Promise<Administrator>
	findByEmail(email: string): Promise<User | null>
	findById(id: string): Promise<User | null>
	fetchUsers(): Promise<User[]>
	delete(userId: string): Promise<void>
}
