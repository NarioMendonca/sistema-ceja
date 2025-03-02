import { HttpClient, HttpRequest, HttpResponse } from "@/data/protocols/httpClient";
import { AxiosResponse } from "axios";
import { axiosPrivate } from "./axiosPrivate";

export class PrivateAxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axiosPrivate({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        withCredentials: true,
      })
    } catch (err: any) {
      axiosResponse = err.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}