import { RemoteCreateModule } from "@/data/use-cases/modules";
import { makeHttpClient } from "../../infra/make-http-client";
import { makeApiUrl } from "../../infra/make-api-url";

export function makeCreateModule() {
  const httpClient = makeHttpClient()
  const createModule = new RemoteCreateModule(makeApiUrl('/modules'), httpClient)
  return createModule
}