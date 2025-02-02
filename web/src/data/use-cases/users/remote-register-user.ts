import { UnexpectedError } from "@/domain/errors";
import { RegisterUser } from "@/domain/use-cases/users/register-user";
import { HttpClient } from "../../protocols/httpClient";
import { ResourceAlreadyExists } from "@/domain/errors/resource-already-exists";

export class RemoteRegisterUser implements RegisterUser {
  constructor(readonly url: string, readonly httpClient: HttpClient) { }

  async handle(params: RegisterUser.Params): Promise<void> {
    const request = await this.httpClient.request({ url: this.url, method: 'post', body: params })

    switch (request.statusCode) {
      case 201: return request.body
      case 409: throw new ResourceAlreadyExists()
      default: throw new UnexpectedError()
    }
  }
}