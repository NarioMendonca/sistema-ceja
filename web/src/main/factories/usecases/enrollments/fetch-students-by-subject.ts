import { RemoteFetchStudentBySubject } from "@/data/use-cases/enrollments/fetch-students-by-subject";
import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeRemoteFetchStudentsBySubject() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteFetchStudentBySubject(makeApiUrl('/enrollments/students',), privateHttpClient)
}