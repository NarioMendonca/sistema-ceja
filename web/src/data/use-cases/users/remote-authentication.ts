import type { Authentication } from "@/domain/use-cases/users/authentication";
import { UnexpectedError } from "@/domain/errors";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import axios from "axios";

export class RemoteAuthentication implements Authentication {
  constructor(
    private url: string
  ) { }

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await axios({
      baseURL: this.url,
      method: 'post',
      data: params,
      withCredentials: true
    })

    switch (httpResponse.status) {
      case 200: return httpResponse.data!
      case 401: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}