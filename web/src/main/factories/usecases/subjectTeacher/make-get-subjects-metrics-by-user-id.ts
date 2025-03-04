import { RemoteGetSubjectsMetricsByUserId } from "@/data/use-cases/subjectTeacher/get-subjects-metrics-by-user-id"
import { makeApiUrl } from "../../infra/make-api-url"
import { makePrivateHttpClient } from "../../infra/make-private-http-client"

export function makeRemoteGetSubjectsMetricsByUserId() {
  const privateHttpClient = makePrivateHttpClient()
  return new RemoteGetSubjectsMetricsByUserId(makeApiUrl('/subjects/metrics'), privateHttpClient)
}