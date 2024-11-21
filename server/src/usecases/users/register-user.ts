import type { UsersRepository } from '@/repositories'
import { AlreadyExistsError } from '../errors'
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
	constructor(private usersRepository: UsersRepository) { }

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
			throw new AlreadyExistsError()
		}

		const password = generateRandomPassword()
		const passwordHashed = await createPasswordHash(password)

		// create here a function to send an email with user password and a link to be able to change

		const user = await this.usersRepository.create({
			name,
			email,
			password_hash: passwordHashed,
			role: role ?? UserRoles.student,
			birth: birth ?? null,
			cpf: cpf ?? null,
		})

		const { password_hash, ...userWithoutPasswordHash } = user

		return {
			user: userWithoutPasswordHash,
		}
	}
}
