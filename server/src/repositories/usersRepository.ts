import type { Administrator, Student, Teacher, User, UserRoles, UsersMetrics } from '@/models/User'

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
	createTeacher(data: CreateTeacherInput): Promise<Teacher>
	createAdmin(data: CreateAdminInput): Promise<Administrator>
	findByEmail(email: string): Promise<User | null>
	findById(id: string): Promise<User | null>
	findUserWithRoleData(id: string): Promise<Student | Teacher | Administrator | User | null>
	fetchUsers(): Promise<User[]>
	getUsersMetrics(): Promise<UsersMetrics>
	delete(userId: string): Promise<void>
}
