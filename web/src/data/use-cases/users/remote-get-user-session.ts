import { HttpClient } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { GetUserSession as GetUserSession } from "@/domain/use-cases/users/verifyUserSession";

export class RemoteGetUserSession implements GetUserSession {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(): Promise<GetUserSession.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'get' })

    switch (response.statusCode) {
      case 200: return response.body
      case 401: throw new UnauthorizedError()
      default: throw new UnexpectedError()
    }
  }
}