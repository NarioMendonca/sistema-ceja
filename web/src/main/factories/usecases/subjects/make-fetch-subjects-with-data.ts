import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";
import { RemoteFetchSubjectsWithData } from "@/data/use-cases/subjects/remote-fetch-subjects-with-data";

export function makeFetchSubjectsWithData() {
  const privateHttpClient = makePrivateHttpClient()
  const fetchSubjectsWithData = new RemoteFetchSubjectsWithData(makeApiUrl('/subjects/all'), privateHttpClient)
  return fetchSubjectsWithData
}