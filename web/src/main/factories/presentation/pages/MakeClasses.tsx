import { Classes } from "@/presentation/pages/Classes/Classes";
import { makeFetchClasses } from "../../usecases/classes/make-fetch-classes";
import { makeCreateClass } from "../../usecases/classes/make-create-class";

export function MakeClasses() {
  const fetchClasses = makeFetchClasses()
  const createClass = makeCreateClass()
  return <Classes fetchClasses={fetchClasses} remoteCreateClass={createClass} />
}