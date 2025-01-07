import { UsersRepository } from '@/repositories/usersRepository'
import { User } from '@/models/'

interface FetchUsersUseCaseResponse {
  users: User[]
}

export class FetchUsersUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(): Promise<FetchUsersUseCaseResponse> {
    const users = await this.usersRepository.fetchUsers()

    return {
      users,
    }
  }
}
