import { Courses } from "@/presentation/pages/Courses/Courses";
import { makeFetchSubjects } from "../usecases/subjects/make-fetch-subjects";
import { makeCreateSubject } from "../usecases/subjects/make-create-subject";

export function MakeCourses() {
  const fetchSubjects = makeFetchSubjects()
  const createSubject = makeCreateSubject()
  return <Courses fetchSubjects={fetchSubjects} createSubject={createSubject} />
}