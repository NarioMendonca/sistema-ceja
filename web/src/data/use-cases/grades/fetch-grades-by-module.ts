import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { FetchGradesByModule } from "@/domain/use-cases/grades/fetch-grades-by-module";

export class RemoteFetchGradesByModule implements FetchGradesByModule {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: FetchGradesByModule.Params): Promise<FetchGradesByModule.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${params.moduleId}/module`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError
      default: throw new UnexpectedError
    }
  }
}