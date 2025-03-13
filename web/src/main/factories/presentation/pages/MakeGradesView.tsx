import { GradesView } from "@/presentation/pages/GradesView/GradesView";
import { makeFetchSubjectsWithData } from "../../usecases/subjects/make-fetch-subjects-with-data";

export function MakeGradesView() {
  const remoteFetchSubjectWithData = makeFetchSubjectsWithData()
  return <GradesView
    remoteFetchSubjectsWithData={remoteFetchSubjectWithData}
  />
}