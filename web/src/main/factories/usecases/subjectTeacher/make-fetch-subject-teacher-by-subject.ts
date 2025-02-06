import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";
import { RemoteFetchSubjectTeacherBySubject } from "@/data/use-cases/subjectTeacher/remote-fetch-subject-teacher-by-subject";

export function makeFetchSubjectTeacherBySubject() {
  const httpClient = makeHttpClient()
  const remoteFetchSubjectTeacherBySubject = new RemoteFetchSubjectTeacherBySubject(makeApiUrl('/subjectTeacher'), httpClient)
  return remoteFetchSubjectTeacherBySubject
}