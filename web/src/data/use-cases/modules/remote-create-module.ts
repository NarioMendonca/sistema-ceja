import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { CreateModule } from "@/domain/use-cases/modules";

export class RemoteCreateModule implements CreateModule {
  constructor(private readonly url: string, private readonly httpClint: HttpClient) { }

  async handle(params: CreateModule.Params): Promise<CreateModule.Model> {
    const response = await this.httpClint.request({ url: this.url, method: 'post', body: params })

    switch (response.statusCode) {
      case HttpStatusCode.created:
        return response.body
      default:
        throw new UnexpectedError()
    }
  }
}