import { HttpClient } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchStudentBySubject } from "@/domain/use-cases/enrollments/fetch-student-by-subject";

export class RemoteFetchStudentBySubject implements FetchStudentBySubject {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle({ subjectId }: FetchStudentBySubject.Params): Promise<FetchStudentBySubject.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${subjectId}/subjects`, method: 'get' })

    switch (response.statusCode) {
      case 200: return response.body
      default: throw new UnexpectedError()
    }
  }
}