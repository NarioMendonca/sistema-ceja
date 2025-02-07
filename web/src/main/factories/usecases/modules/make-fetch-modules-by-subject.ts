import { RemoteFetchModulesBySubject } from "@/data/use-cases/modules";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeFetchModulesBySubject() {
  const httpClient = makeHttpClient()
  const fetchModulesBySubject = new RemoteFetchModulesBySubject(makeApiUrl('/modules'), httpClient)
  return fetchModulesBySubject
}