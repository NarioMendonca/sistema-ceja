import { RemoteFetchClasses } from "@/data/use-cases/classes/remote-fetch-classes"
import { makeApiUrl } from "../../infra/make-api-url"
import { makeHttpClient } from "../../infra/make-http-client"

export function makeFetchClasses() {
  const httpClient = makeHttpClient()
  const fetchClasses = new RemoteFetchClasses(makeApiUrl('/classes'), httpClient)

  return fetchClasses
}