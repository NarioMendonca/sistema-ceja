import { HttpClient } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchStudentSubjects } from "@/domain/use-cases/enrollments/fetch-student-subjects";

export class RemoteFetchStudentSubjects implements FetchStudentSubjects {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: FetchStudentSubjects.Params): Promise<FetchStudentSubjects.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${params.userId}/students`, method: 'get' })

    switch (response.statusCode) {
      case 200: return response.body
      default: throw new UnexpectedError()
    }
  }
}