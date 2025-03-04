export interface GetSubjectsMetricsByUserId {
  handle(params: GetSubjectsMetricsByUserId.Params): Promise<GetSubjectsMetricsByUserId.Model>
}

export namespace GetSubjectsMetricsByUserId {
  export type Params = {
    userId: string
  }

  export type Model = {
    subjectsMetrics: number
  }
}