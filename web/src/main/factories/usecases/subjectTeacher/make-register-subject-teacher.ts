import { RemoteRegisterSubjectTeacher } from "@/data/use-cases/subjectTeacher/remote-register-subject-teacher";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeRegisterSubjectTeacher() {
  const httpClint = makeHttpClient()
  const subjectTeacher = new RemoteRegisterSubjectTeacher(makeApiUrl('/subjectTeacher'), httpClint)
  return subjectTeacher
}