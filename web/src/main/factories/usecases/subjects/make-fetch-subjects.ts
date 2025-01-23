import { RemoteFetchSubjects } from "@/data/use-cases/subjects/remote-fetch-subjects";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeFetchSubjects() {
  const httpClient = makeHttpClient()
  const fetchSubjects = new RemoteFetchSubjects(makeApiUrl('/subjects'), httpClient)

  return fetchSubjects
}