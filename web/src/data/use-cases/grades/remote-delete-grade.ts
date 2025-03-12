import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { DeleteGrade } from "@/domain/use-cases/grades/delete-grade";

export class RemoteDeleteGrade implements DeleteGrade {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: DeleteGrade.Params): Promise<DeleteGrade.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'post', body: params })

    switch (response.statusCode) {
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      default: throw new UnexpectedError()
    }
  }
}