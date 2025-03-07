import { SubjectDashboard } from "@/presentation/pages/Subjects/SubjectDashboard";
import { makeFetchModulesBySubject } from "../../usecases/modules/make-fetch-modules-by-subject";
import { makeCreateModule } from "../../usecases/modules/make-create-module";
import { makeRemoteFetchStudentsBySubject } from "../../usecases/enrollments/fetch-students-by-subject";

export function MakeSubjectDashboard() {
  const fetchModulesBySubject = makeFetchModulesBySubject()
  const remoteFetchStudentsBySubject = makeRemoteFetchStudentsBySubject()
  const createModule = makeCreateModule()
  return (
    <SubjectDashboard
      createModule={createModule}
      remoteFetchStudentsBySubject={remoteFetchStudentsBySubject}
      remoteFetchModulesBySubject={fetchModulesBySubject}
    />
  )
}