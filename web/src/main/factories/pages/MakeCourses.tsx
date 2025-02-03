import { Subjects } from "@/presentation/pages/Subjects/Subjects";
import { makeFetchSubjects } from "../usecases/subjects/make-fetch-subjects";
import { makeCreateSubject } from "../usecases/subjects/make-create-subject";

export function MakeCourses() {
  const fetchSubjects = makeFetchSubjects()
  const createSubject = makeCreateSubject()
  return <Subjects fetchSubjects={fetchSubjects} createSubject={createSubject} />
}