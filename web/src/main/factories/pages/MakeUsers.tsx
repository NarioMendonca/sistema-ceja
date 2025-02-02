import { Users } from '@/presentation/pages/Users/Users'
import { makeFetchUsers } from '../usecases/users/make-fetch-users'
import { makeRegisterUser } from '../usecases/users/make-register-user'

export function makeUsersPage() {
  const fetchUsers = makeFetchUsers()
  const registerUser = makeRegisterUser()

  return <Users fetchUsers={fetchUsers} registerUser={registerUser} />
}