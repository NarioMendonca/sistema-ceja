import type { UsersRepository } from '@/repositories'
import { AlreadyExistsError, InvalidRoleError } from '../errors'
import { Administrator, Student, Teacher, UserRoles, type UserWithoutPasswordHash } from '@/models/User'
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

interface RegisterUseCaseResponse {
	user: Administrator | Teacher | Student
}

export class RegisterUseCase {
	constructor(private usersRepository: UsersRepository) { }

	async execute({
		userData
	}: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
		const verifyIfEmailAlreadyExists =
			await this.usersRepository.findByEmail(userData.email)

		if (verifyIfEmailAlreadyExists) {
			throw new AlreadyExistsError()
		}

		const password = generateRandomPassword()
		const passwordHashed = await createPasswordHash(password)

		// create here a function to send an email with user password and a link to be able to change

		if (userData.role === 'ADMIN') {
			const user = await this.usersRepository.createAdmin({
				name: userData.name,
				email: userData.email,
				password_hash: passwordHashed,
				position: userData.position ?? '',
				role: UserRoles.admin,
				cpf: userData.cpf ?? null
			})
			return {
				user
			}
		} else if (userData.role === 'TEACHER') {
			const user = await this.usersRepository.createTeacher({
				name: userData.name,
				email: userData.email,
				password_hash: passwordHashed,
				role: UserRoles.teacher,
				cpf: userData.cpf ?? null,
				education: userData.education ?? '',
				specialization: userData.specialization ?? ''
			})
			return {
				user
			}
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
			return {
				user
			}
		} else {
			throw new InvalidRoleError()
		}
	}
}
