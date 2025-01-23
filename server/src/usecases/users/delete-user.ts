import { ResourceNotFoundError, InvalidCredentialsError, InvalidRoleError } from '../errors'
import { compare } from 'bcryptjs'
import { UsersRepository } from '@/repositories/usersRepository'

interface DeleteUserUseCaseRequest {
  userId: string
  adminId: string
  adminPassword: string
}

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ adminId, adminPassword, userId }: DeleteUserUseCaseRequest) {
    try {
      const admin = await this.usersRepository.findById(adminId)

      if (!admin) {
        throw new ResourceNotFoundError()
      }

      if (admin.role !== 'ADMIN') {
        throw new InvalidRoleError()
      }

      const isAdminPasswordValid = await compare(
        adminPassword,
        admin.password_hash,
      )

      if (!isAdminPasswordValid) {
        throw new InvalidCredentialsError()
      }

      await this.usersRepository.delete(userId)
    } catch (err) {
      throw err
    }
  }
}
