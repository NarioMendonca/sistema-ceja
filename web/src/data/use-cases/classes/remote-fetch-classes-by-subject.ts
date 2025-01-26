import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { ResourceNotFoundError } from "@/domain/errors/recource-not-found-error";
import { FetchClassesBySubject } from "@/domain/use-cases/classes/fetch-classes-by-subject";

export class RemoteFetchClassesBySubject implements FetchClassesBySubject {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async handle({ subjectId }: FetchClassesBySubject.Params): Promise<FetchClassesBySubject.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${subjectId}`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.notFound: throw new ResourceNotFoundError()
      default: throw new UnexpectedError()
    }
  }
}