import { Classes } from "@/presentation/pages/Classes/Classes";
import { makeFetchClasses } from "../usecases/classes/make-fetch-classes";

export function makeClasses() {
  const fetchClasses = makeFetchClasses()
  return Classes({ fetchClasses })
}