import { FetchUsers } from "@/domain/use-cases/users/fetch-users";
import { HttpClient } from "../../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";

export class RemoteFetchUsers implements FetchUsers {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(params: FetchUsers.Params): Promise<FetchUsers.Model> {
    const url = params ? `${this.url}?role=${params.role}` : this.url
    const response = await this.httpClient.request({ url, method: 'get' })

    switch (response.statusCode) {
      case 200: return response.body
      default: throw new UnexpectedError()
    }
  }
}