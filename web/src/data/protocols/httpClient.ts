export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
  conflict = 409
}

export interface HttpClient<R = any> {
  request(data: HttpRequest): Promise<HttpResponse<R>>
}