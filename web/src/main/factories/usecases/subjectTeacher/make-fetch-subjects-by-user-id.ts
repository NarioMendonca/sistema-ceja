import { RemoteFetchSubjectsByUserId } from "@/data/use-cases/subjectTeacher/fetch-subjects-by-user-id";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";
import { makeApiUrl } from "../../infra/make-api-url";

export function makeFetchSubjectsByUserId() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteFetchSubjectsByUserId(makeApiUrl('/subjects'), privateHttpClient)
}