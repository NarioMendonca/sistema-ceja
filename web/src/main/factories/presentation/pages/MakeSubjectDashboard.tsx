import { SubjectDashboard } from "@/presentation/pages/Subjects/SubjectDashboard";
import { makeFetchModulesBySubject } from "../../usecases/modules/make-fetch-modules-by-subject";
import { makeCreateModule } from "../../usecases/modules/make-create-module";
import { makeRemoteFetchStudentsBySubject } from "../../usecases/enrollments/fetch-students-by-subject";
import { makeFetchGradesByModule } from "../../usecases/grades/make-fetch-grades-by-module";
import { makeRemoteCreateGrade } from "../../usecases/grades/make-remote-create-grade";

export function MakeSubjectDashboard() {
  const fetchModulesBySubject = makeFetchModulesBySubject()
  const remoteFetchStudentsBySubject = makeRemoteFetchStudentsBySubject()
  const createModule = makeCreateModule()
  const fetchGradesByModule = makeFetchGradesByModule()
  const remoteCreateGrade = makeRemoteCreateGrade()
  return (
    <SubjectDashboard
      createModule={createModule}
      remoteFetchStudentsBySubject={remoteFetchStudentsBySubject}
      remoteFetchModulesBySubject={fetchModulesBySubject}
      remoteFetchGradesByModule={fetchGradesByModule}
      remoteCreateGrade={remoteCreateGrade}
    />
  )
}