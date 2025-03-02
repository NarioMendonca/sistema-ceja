import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/httpClient'

import { AxiosResponse } from 'axios'
import { axiosPrivate } from './axiosPrivate'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axiosPrivate.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}