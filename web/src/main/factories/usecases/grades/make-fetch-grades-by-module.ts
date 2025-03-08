import { RemoteFetchGradesByModule } from "@/data/use-cases/grades/fetch-grades-by-module";
import { makeApiUrl } from "../../infra/make-api-url";
import { makePrivateHttpClient } from "../../infra/make-private-http-client";

export function makeFetchGradesByModule() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteFetchGradesByModule(makeApiUrl('/grades'), privateHttpClient)
}