import { Subjects } from "@/presentation/pages/Subjects/Subjects";
import { makeFetchSubjects } from "../../usecases/subjects/make-fetch-subjects";
import { makeCreateSubject } from "../../usecases/subjects/make-create-subject";
import { makeFetchUsers } from "../../usecases/users/make-fetch-users";
import { makeRegisterSubjectTeacher } from "../../usecases/subjectTeacher/make-register-subject-teacher";
import { makeFetchSubjectTeacherBySubject } from "../../usecases/subjectTeacher/make-fetch-subject-teacher-by-subject";

export function MakeCourses() {
  const fetchSubjects = makeFetchSubjects()
  const createSubject = makeCreateSubject()
  const registerSubjectTeacher = makeRegisterSubjectTeacher()
  const fetchUsers = makeFetchUsers()
  const fetchSubjectTeacherBySubject = makeFetchSubjectTeacherBySubject()
  return <Subjects
    fetchSubjects={fetchSubjects}
    createSubject={createSubject}
    registerSubjectTeacher={registerSubjectTeacher}
    fetchUsers={fetchUsers}
    fetchSubjectTeacherBySubject={fetchSubjectTeacherBySubject}
  />
}