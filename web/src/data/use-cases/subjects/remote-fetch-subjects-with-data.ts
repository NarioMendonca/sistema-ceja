import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchSubjectsWithData } from "@/domain/use-cases/subjects/fetch-subjects-with-data";

export class RemoteFetchSubjectsWithData implements FetchSubjectsWithData {
  constructor(private url: string, private httpClient: HttpClient) { }

  async handle({ userId }: FetchSubjectsWithData.Params): Promise<FetchSubjectsWithData.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${userId}/students`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body!
      default: throw new UnexpectedError()
    }
  }
}