import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { FetchSubjectsByUserId } from "@/domain/use-cases/subjectTeacher/fetch-subjects-by-user-id";

export class RemoteFetchSubjectsByUserId implements FetchSubjectsByUserId {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: FetchSubjectsByUserId.Params): Promise<FetchSubjectsByUserId.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${params.userId}/teacher`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError
      default: throw new UnexpectedError
    }
  }
}