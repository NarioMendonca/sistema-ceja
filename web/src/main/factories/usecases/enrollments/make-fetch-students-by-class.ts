import { RemoteFetchStudentsByClass } from "@/data/use-cases/enrollments/remote-fetch-students-by-class";
import { makeApiUrl } from "../../infra/make-api-url";
import { AxiosHttpClient } from "@/infra/http/axios-http-client";

export function makeFetchStudentsByClass() {
  const httpClient = new AxiosHttpClient()
  const remoteFetchStudentsByClass = new RemoteFetchStudentsByClass(makeApiUrl('/enrollments'), httpClient)

  return remoteFetchStudentsByClass
}