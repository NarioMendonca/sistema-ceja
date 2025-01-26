import { ViewClasses } from "@/presentation/pages/Courses/ViewClasses";
import { makeFetchClassesBySubject } from "../usecases/classes/make-fetch-classes-by-subject";

export function makeViewClasses() {
  const fetchClassesBySubject = makeFetchClassesBySubject()
  return <ViewClasses fetchClassesBySubject={fetchClassesBySubject} />
}