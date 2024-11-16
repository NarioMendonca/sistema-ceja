export type User = {
	id: string
	name: string
	email: string
	password_hash: string
	role: UserRoles
	created_at?: Date
	cpf: string
	birth: Date
}

export type UserWithoutPasswordHash = Omit<User, 'password_hash'>

export enum UserRoles {
	admin = 'admin',
	teacher = 'teacher',
	student = 'student',
}
