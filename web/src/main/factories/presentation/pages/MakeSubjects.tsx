import { Subjects } from "@/presentation/pages/Subjects/Subjects";
import { makeFetchSubjects } from "../../usecases/subjects/make-fetch-subjects";
import { makeCreateSubject } from "../../usecases/subjects/make-create-subject";
import { makeFetchUsers } from "../../usecases/users/make-fetch-users";
import { makeRegisterSubjectTeacher } from "../../usecases/subjectTeacher/make-register-subject-teacher";
import { makeFetchSubjectTeacherBySubject } from "../../usecases/subjectTeacher/make-fetch-subject-teacher-by-subject";
import { makeFetchSubjectsByUserId } from "../../usecases/subjectTeacher/make-fetch-subjects-by-user-id";

export function MakeSubjects() {
  return <Subjects
    fetchSubjects={makeFetchSubjects()}
    createSubject={makeCreateSubject()}
    registerSubjectTeacher={makeRegisterSubjectTeacher()}
    fetchUsers={makeFetchUsers()}
    fetchSubjectTeacherBySubject={makeFetchSubjectTeacherBySubject()}
    remoteFetchSubjectsByUser={makeFetchSubjectsByUserId()}
  />
}