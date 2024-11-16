import type { UsersRepository } from '@/repositores'
import { UserAlreadyExistsError } from '../errors'
import { UserRoles, type UserWithoutPasswordHash } from '@/models/User'
import {
	createPasswordHash,
	generateRandomPassword,
} from '@/utils/passwordUtils'

interface RegisterUseCaseRequest {
	name: string
	email: string
	role?: UserRoles
	birth?: Date
	cpf?: string
}

interface RegisterUseCaseResponse {
	user: UserWithoutPasswordHash
}

export class RegisterUseCase {
	constructor(private usersRepository: UsersRepository) {}

	async execute({
		email,
		name,
		role,
		birth,
		cpf,
	}: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
		const verifyIfEmailAlreadyExists =
			await this.usersRepository.findByEmail(email)

		if (verifyIfEmailAlreadyExists) {
			throw new UserAlreadyExistsError()
		}

		const password = generateRandomPassword()
		const password_hash = await createPasswordHash(password)

		// create here a function to send an email with user password and a link to be able to change

		const user = await this.usersRepository.create({
			name,
			email,
			password_hash,
			role: role ?? UserRoles.student,
			birth: birth ?? null,
			cpf: cpf ?? null,
		})

		return {
			user,
		}
	}
}
