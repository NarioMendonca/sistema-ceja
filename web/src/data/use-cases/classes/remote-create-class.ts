import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { CreateClass } from "@/domain/use-cases/classes/create-class";

export class RemoteCreateClass implements CreateClass {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: CreateClass.Params): Promise<CreateClass.Model> {
    const response = await this.httpClient.request({ url: this.url, method: "post", body: params })

    switch (response.statusCode) {
      case HttpStatusCode.created:
        return response.body!
      default:
        throw new UnexpectedError()
    }
  }
}
