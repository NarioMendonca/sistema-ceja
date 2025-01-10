import { AxiosHttpClient } from "@/infra/http/axios-http-client";

export function makeHttpClient() {
  return new AxiosHttpClient()
}