import { SubjectModules } from "@/presentation/pages/Subjects/SubjectModules";
import { makeFetchModulesBySubject } from "../usecases/modules/make-fetch-modules-by-subject";

export function MakeSubjectModules() {
  const fetchModulesBySubject = makeFetchModulesBySubject()
  return <SubjectModules fetchModulesBySubject={fetchModulesBySubject} />
}