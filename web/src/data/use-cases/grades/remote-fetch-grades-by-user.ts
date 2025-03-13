import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { FetchGradesByUser } from "@/domain/use-cases/grades/fetch-grades-by-user";

export class RemoteFetchGradesByUser implements FetchGradesByUser {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: FetchGradesByUser.Params): Promise<FetchGradesByUser.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${params.userId}/user`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError
      default: throw new UnexpectedError
    }
  }
}