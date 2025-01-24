import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchClasses } from "@/domain/use-cases/classes/fetch-classes";

export class RemoteFetchClasses implements FetchClasses {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(): Promise<FetchClasses.Model> {
    const response = await this.httpClient.request({ url: this.url, method: "get" })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!
      default:
        throw new UnexpectedError()
    }
  }
}
