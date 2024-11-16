import type { UsersRepository } from '@/repositores'
import type { UserWithoutPasswordHash } from '@/models'
import { InvalidCredentialsError } from '../errors'
import { compare } from 'bcryptjs'

interface AuthenticateUseCaseRequest {
	email: string
	password: string
}

interface AuthenticateUseCaseResponse {
	user: UserWithoutPasswordHash
}

export class AuthenticateUseCase {
	constructor(private usersRepository: UsersRepository) {}

	async execute({
		email,
		password,
	}: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
		const user = await this.usersRepository.findByEmail(email)

		if (!user) {
			throw new InvalidCredentialsError()
		}

		const isSamePassword = await compare(password, user.password_hash)

		if (!isSamePassword) {
			throw new InvalidCredentialsError()
		}

		const { password_hash, ...userWithoutPasswordHash } = user

		return {
			user: userWithoutPasswordHash,
		}
	}
}
