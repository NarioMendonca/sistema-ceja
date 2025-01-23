import { ResourceNotFoundError, InvalidCredentialsError, InvalidRoleError } from '../errors'
import { compare } from 'bcryptjs'
import { UsersRepository, ClassesRepository } from '@/repositories'

interface DeleteClassUseCaseRequest {
  classId: string
  adminId: string
  adminPassword: string
}

export class DeleteClassUseCase {
  constructor(
    private classesRepository: ClassesRepository,
    private usersRepository: UsersRepository
  ) { }

  async execute({ adminId, adminPassword, classId }: DeleteClassUseCaseRequest) {
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

      await this.classesRepository.delete(classId)
    } catch (err) {
      throw err
    }
  }
}
