import { SubjectModules } from "@/presentation/pages/Subjects/SubjectModules";
import { makeFetchModulesBySubject } from "../usecases/modules/make-fetch-modules-by-subject";
import { makeCreateModule } from "../usecases/modules/make-create-module";

export function MakeSubjectModules() {
  const fetchModulesBySubject = makeFetchModulesBySubject()
  const createModule = makeCreateModule()
  return <SubjectModules fetchModulesBySubject={fetchModulesBySubject} createModule={createModule} />
}