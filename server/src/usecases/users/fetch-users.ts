import { UsersRepository } from '@/repositories/usersRepository'
import { User, UserRoles } from '@/models/'

interface FetchUsersUseCaseRequest {
  role?: UserRoles
}

interface FetchUsersUseCaseResponse {
  users: User[]
}

export class FetchUsersUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ role }: FetchUsersUseCaseRequest): Promise<FetchUsersUseCaseResponse> {
    const users = await this.usersRepository.fetchUsers(role)

    return {
      users,
    }
  }
}
