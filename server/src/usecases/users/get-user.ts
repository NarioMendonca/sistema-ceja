import { UsersRepository } from '@/repositories/usersRepository'
import { Administrator, Student, Teacher, User } from '@/models'
import { ResourceNotFoundError } from '../errors'

interface GetUserRequest {
  id: string
}

interface GetUserResponse {
  user: Student | Teacher | Administrator | User | null
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    id,
  }: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.usersRepository.findUserWithRoleData(id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}
