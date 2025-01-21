import { FetchUsers } from "@/domain/use-cases/users/fetch-users";
import { HttpClient } from "../../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";

export class RemoteFetchUsers implements FetchUsers {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(): Promise<FetchUsers.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'get' })

    switch (response.statusCode) {
      case 200: return response.body
      default: throw new UnexpectedError()
    }
  }
}