import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { FetchSubjectTeacherBySubject } from "@/domain/use-cases/subjectTeacher/fetch-subject-teacher-by-subject";

export class RemoteFetchSubjectTeacherBySubject implements FetchSubjectTeacherBySubject {
  constructor(private readonly url: string, private readonly httpClint: HttpClient) { }

  async handle(params: FetchSubjectTeacherBySubject.Params): Promise<FetchSubjectTeacherBySubject.Model> {
    const response = await this.httpClint.request({ url: `${this.url}/${params.subjectId}/subject`, method: 'get' })

    switch (response.statusCode) {
      case HttpStatusCode.created:
        return response.body
      default:
        throw new UnexpectedError()
    }
  }
}