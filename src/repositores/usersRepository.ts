import type { User, UserRoles } from '@/models/User'

export type UserCreateInput = {
	name: string
	email: string
	password_hash: string
	role: UserRoles
	birth: Date | null
	cpf: string | null
}

export interface UsersRepository {
	create(data: UserCreateInput): Promise<User>
	findByEmail(email: string): Promise<User | null>
	findById(id: string): Promise<User | null>
	fetchUsers(): Promise<User[]>
	delete(userId: string): Promise<void>
}
