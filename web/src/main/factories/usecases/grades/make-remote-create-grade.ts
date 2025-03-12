import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";
import { RemoteCreateGrade } from "@/data/use-cases/grades/remote-create-grade";

export function makeRemoteCreateGrade() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteCreateGrade(makeApiUrl('/grades'), privateHttpClient)
}