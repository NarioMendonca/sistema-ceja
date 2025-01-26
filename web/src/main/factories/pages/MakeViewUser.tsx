import { ViewUser } from "@/presentation/pages/ViewUser/ViewUser";
import { makeGetUser } from "../usecases/users/make-get-user";

export function MakeViewUser() {
  const getUser = makeGetUser()
  return <ViewUser getUser={getUser} />
}