import { HttpClient } from "../../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { GetUsersMetrics } from "@/domain/use-cases/users/get-users-metrics";

export class RemoteGetUsersMetrics implements GetUsersMetrics {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(): Promise<GetUsersMetrics.Model> {
    const request = await this.httpClient.request({ url: this.url, method: 'get' })

    switch (request.statusCode) {
      case 200: return request.body
      default: throw new UnexpectedError()
    }
  }
}