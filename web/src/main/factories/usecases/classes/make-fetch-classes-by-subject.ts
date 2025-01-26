import { RemoteFetchClassesBySubject } from "@/data/use-cases/classes/remote-fetch-classes-by-subject";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeFetchClassesBySubject() {
  const httpClient = makeHttpClient()
  const fetchClassesBySubject = new RemoteFetchClassesBySubject(makeApiUrl('/classes/subject'), httpClient)
  return fetchClassesBySubject
}