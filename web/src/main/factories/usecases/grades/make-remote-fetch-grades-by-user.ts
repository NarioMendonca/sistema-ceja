import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";
import { RemoteFetchGradesByUser } from "@/data/use-cases/grades/remote-fetch-grades-by-user";

export function makeFetchGradesByUser() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteFetchGradesByUser(makeApiUrl('/grades'), privateHttpClient)
}