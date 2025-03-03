import { HttpClient } from "../../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { Logout } from "@/domain/use-cases/users/logout";

export class RemoteLogout implements Logout {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(): Promise<void> {
    const request = await this.httpClient.request({ url: this.url, method: 'get' })

    switch (request.statusCode) {
      case 200: return request.body
      default: throw new UnexpectedError()
    }
  }
}