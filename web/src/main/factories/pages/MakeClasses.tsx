import { Classes } from "@/presentation/pages/Classes/Classes";
import { makeFetchClasses } from "../usecases/classes/make-fetch-classes";

export function MakeClasses() {
  const fetchClasses = makeFetchClasses()
  return <Classes fetchClasses={fetchClasses} />
}