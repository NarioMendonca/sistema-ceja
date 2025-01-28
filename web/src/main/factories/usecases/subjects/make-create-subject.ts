import { RemoteCreateSubject } from "@/data/use-cases/subjects/remote-create-subject";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeCreateSubject() {
  const httpClient = makeHttpClient()
  const createSubject = new RemoteCreateSubject(makeApiUrl('/subjects'), httpClient)
  return createSubject
}