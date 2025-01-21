import { Refresh } from "@/domain/use-cases/users/refresh";
import { HttpClient } from "../../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";

export class RemoteRefresh implements Refresh {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(): Promise<Refresh.Model> {
    const request = await this.httpClient.request({ url: this.url, method: 'post' })

    switch (request.statusCode) {
      case 200: return request.body
      default: throw new UnexpectedError()
    }
  }
}