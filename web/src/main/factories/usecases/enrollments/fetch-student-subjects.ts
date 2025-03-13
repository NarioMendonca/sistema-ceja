import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";
import { RemoteFetchStudentSubjects } from "@/data/use-cases/enrollments/remote-fetch-student-subjects";

export function makeRemoteFetchStudentSubjects() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteFetchStudentSubjects(makeApiUrl('/enrollments/subjects',), privateHttpClient)
}