import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { GetSubjectsMetricsByUserId } from "@/domain/use-cases/subjectTeacher/get-subjects-metrics-by-user-id";

export class RemoteGetSubjectsMetricsByUserId implements GetSubjectsMetricsByUserId {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async handle(params: GetSubjectsMetricsByUserId.Params): Promise<GetSubjectsMetricsByUserId.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${params.userId}/teacher`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      default: throw new UnexpectedError()
    }
  }
}