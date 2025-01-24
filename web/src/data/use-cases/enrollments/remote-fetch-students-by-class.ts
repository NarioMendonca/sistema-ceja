import { HttpClient, HttpStatusCode } from "@/data/protocols/httpClient";
import { UnexpectedError } from "@/domain/errors";
import { ResourceNotFoundError } from "@/domain/errors/recource-not-found-error";
import { FetchStudentsByClass } from "@/domain/use-cases/enrollments/fetch-students-by-class";

export class RemoteFetchStudentsByClass implements FetchStudentsByClass {
  constructor(private readonly url: string, private readonly httpClient: HttpClient) { }

  async handle(params: FetchStudentsByClass.Params): Promise<FetchStudentsByClass.Model> {
    const response = await this.httpClient.request({ url: `${this.url}/${params.classId}`, method: "get" });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!;
      case HttpStatusCode.notFound:
        throw new ResourceNotFoundError()
      default:
        throw new UnexpectedError();
    }
  }
}
