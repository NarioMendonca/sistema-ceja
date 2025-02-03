import { RemoteCreateClass } from "@/data/use-cases/classes/remote-create-class";
import { makeApiUrl } from "../../infra/make-api-url";
import { makeHttpClient } from "../../infra/make-http-client";

export function makeCreateClass() {
  const httpClient = makeHttpClient()
  const remoteCreateClass = new RemoteCreateClass(makeApiUrl('/classes'), httpClient)
  return remoteCreateClass
}