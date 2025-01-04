import { UsersRepository } from '@/repositories/usersRepository'
import { User } from '@/models'
import { ResourceNotFoundError } from '../errors'

interface GetUserRequest {
  id: string
}

interface GetUserResponse {
  user: User
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    id,
  }: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}
