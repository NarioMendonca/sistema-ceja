import { Users } from '@/presentation/pages/Users/Users'
import { makeFetchUsers } from '../usecases/users/make-fetch-users'

export function makeUsersPage() {
  const users = Users({
    fetchUsers: makeFetchUsers()
  })

  return users
}