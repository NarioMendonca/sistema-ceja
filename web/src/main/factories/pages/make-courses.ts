import { Courses } from "@/presentation/pages/Courses/Courses";
import { makeFetchSubjects } from "../usecases/subjects/make-fetch-subjects";

export function makeCourses() {
  const fetchSubjects = makeFetchSubjects()
  return Courses({ fetchSubjects })
}