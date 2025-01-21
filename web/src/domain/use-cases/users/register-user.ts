import { Administrator, Student, Teacher } from "../../models/User"

export interface RegisterUser {
  handle(params: RegisterUser.Params): Promise<void>
}

export namespace RegisterUser {
  export type Params = Student | Teacher | Administrator
}