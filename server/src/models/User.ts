export type User = {
	id: string
	email: string
	password_hash: string
	name: string
	role: 'ADMIN' | 'TEACHER' | 'STUDENT'
	cpf?: string | null
	created_at?: Date
	updated_at?: Date
}

export type Student = User & {
	enrollmentCode: string
	dateOfBirth?: Date | null
	adress?: string | null
}

export type Teacher = User & {
	specialization: string
	education: string
}

export type Administrator = User & {
	position: string
}

export type UserWithoutPasswordHash = Omit<User, 'password_hash'>

export type StudentData = {
	adress: string,
	dateOfBirth: Date,
	enrollmentCode: string
}

export type TeacherData = {
	education: string,
	specialization: string
}

export type AdminData = {
	position: string
}

export type UsersMetrics = {
	users: number,
	students: number,
	teachers: number
}

export type UserRoles = 'ADMIN' | 'TEACHER' | 'STUDENT'
