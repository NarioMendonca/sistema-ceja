import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchSubjects } from "@/domain/use-cases/subjects/fetch-subjects";

export class RemoteFetchSubjects implements FetchSubjects {
  constructor(private url: string, private httpClient: HttpClient) { }

  async handle(): Promise<FetchSubjects.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body!
      default: throw new UnexpectedError()
    }
  }
}