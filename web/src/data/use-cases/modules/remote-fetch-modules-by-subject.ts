import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchModulesBySubject } from "@/domain/use-cases/modules/fetch-modules-by-subject";

export class RemoteFetchModulesBySubject implements FetchModulesBySubject {
  constructor(private readonly url: string, private readonly httpClint: HttpClient) { }

  async handle(params: FetchModulesBySubject.Params): Promise<FetchModulesBySubject.Model> {
    const response = await this.httpClint.request({ url: `${this.url}/${params.subjectId}`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body
      default:
        throw new UnexpectedError()
    }
  }
}