import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { ResourceAlreadyExists } from "@/domain/errors/resource-already-exists";
import { CreateGrade } from "@/domain/use-cases/grades/create-grade";

export class RemoteCreateGrade implements CreateGrade {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: CreateGrade.Params): Promise<CreateGrade.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'post', body: params })

    switch (response.statusCode) {
      case HttpStatusCode.created: return response.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      case HttpStatusCode.conflict: throw new ResourceAlreadyExists()
      default: throw new UnexpectedError()
    }
  }
}