import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { ResourceAlreadyExists } from "@/domain/errors/resource-already-exists";
import { CreateSubject } from "@/domain/use-cases/subjects/create-subject";

export class RemoteCreateSubject implements CreateSubject {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async handle(props: CreateSubject.Params): Promise<CreateSubject.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'post', body: props });

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.conflict: throw new ResourceAlreadyExists()
      default: throw new UnexpectedError()
    }
  }
}