import { Courses } from "@/presentation/pages/Courses/Courses";
import { makeFetchSubjects } from "../usecases/subjects/make-fetch-subjects";

export function MakeCourses() {
  const fetchSubjects = makeFetchSubjects()
  return <Courses fetchSubjects={fetchSubjects} />
}