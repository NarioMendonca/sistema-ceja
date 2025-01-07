import type { UsersRepository } from '@/repositories'
import { AlreadyExistsError, InvalidRoleError } from '../errors'
import { UserRoles, type UserWithoutPasswordHash } from '@/models/User'
import {
	createPasswordHash,
	generateRandomPassword,
} from '@/utils/passwordUtils'

type UserData = {
	name: string
	email: string
	role: UserRoles
	birth?: Date
	cpf?: string
	enrollmentCode?: string
	dateOfBirth?: Date
	adress?: string
	specialization?: string
	education?: string
	position?: string
}

interface RegisterUseCaseRequest {
	userData: UserData
}

export class RegisterUseCase {
	constructor(private usersRepository: UsersRepository) { }

	async execute({
		userData
	}: RegisterUseCaseRequest): Promise<void> {
		const verifyIfEmailAlreadyExists =
			await this.usersRepository.findByEmail(userData.email)

		if (verifyIfEmailAlreadyExists) {
			throw new AlreadyExistsError()
		}

		const password = generateRandomPassword()
		const passwordHashed = await createPasswordHash(password)

		// create here a function to send an email with user password and a link to be able to change

		if (userData.role === 'ADMIN') {
			const user = await this.usersRepository.CreateAdmin({
				name: userData.name,
				email: userData.email,
				password_hash: passwordHashed,
				position: userData.position ?? '',
				role: UserRoles.admin,
				cpf: userData.cpf ?? null
			})
		} else if (userData.role === 'TEACHER') {
			const user = await this.usersRepository.CreateTeacher({
				name: userData.name,
				email: userData.email,
				password_hash: passwordHashed,
				role: UserRoles.teacher,
				cpf: userData.cpf ?? null,
				education: userData.education ?? '',
				specialization: userData.specialization ?? ''
			})
		} else if (userData.role === 'STUDENT') {
			const user = await this.usersRepository.createStudent({
				name: userData.name,
				email: userData.email,
				password_hash: passwordHashed,
				role: UserRoles.student,
				cpf: userData.cpf ?? null,
				adress: userData.adress ?? '',
				dateOfBirth: userData.dateOfBirth ?? null,
				enrollmentCode: userData.enrollmentCode ?? ''
			})
		} else {
			throw new InvalidRoleError()
		}
	}
}
