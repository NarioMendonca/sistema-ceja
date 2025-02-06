import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { RegisterSubjectTeacher } from "@/domain/use-cases/subjectTeacher/register-subject-teacher";

export class RemoteRegisterSubjectTeacher implements RegisterSubjectTeacher {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: RegisterSubjectTeacher.Params): Promise<RegisterSubjectTeacher.Model> {
    const response = await this.httpClient.request({ url: this.url, method: 'post', body: params })

    switch (response.statusCode) {
      case HttpStatusCode.created:
        return response.body
      default:
        throw new UnexpectedError()
    }
  }
}