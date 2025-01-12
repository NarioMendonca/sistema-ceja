import { GetUser } from "@/domain/use-cases/get-user";
import { HttpClient } from "../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";

export class RemoteGetUser implements GetUser {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(params: GetUser.Params): Promise<GetUser.Model> {
    const request = await this.httpClient.request({ url: `${this.url}/${params.id}`, method: 'get' })

    switch (request.statusCode) {
      case 200: return request.body
      default: throw new UnexpectedError()
    }
  }
}