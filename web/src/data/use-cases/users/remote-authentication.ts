import type { Authentication } from "@/domain/use-cases/users/authentication";
import { UnexpectedError } from "@/domain/errors";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { HttpClient } from "@/data/protocols/httpClient";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly privateHttpClient: HttpClient
  ) { }

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const response = await this.privateHttpClient.request({ url: this.url, method: 'post', body: params })

    switch (response.statusCode) {
      case 200: return response.body
      case 401: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}