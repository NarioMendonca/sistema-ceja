import type { Authentication } from "@/domain/use-cases/authentication";
import { HttpClient } from "../protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";

export class RemoteAuthentication implements Authentication {
  constructor(
    private url: string,
    private httpClient: HttpClient<Authentication.Model>
  ) { }

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({ url: this.url, method: 'post', body: params })

    switch (httpResponse.statusCode) {
      case 200: return httpResponse.body!
      case 401: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}