import { ViewClass } from "@/presentation/pages/Classes/ViewClass";
import { makeFetchStudentsByClass } from "../usecases/enrollments/make-fetch-students-by-class";

export function makeViewClass() {
  const fetchStudentsByClass = makeFetchStudentsByClass()
  return <ViewClass fetchStudentsByClass={fetchStudentsByClass} />
}