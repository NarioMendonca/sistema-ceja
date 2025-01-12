export interface Refresh {
  handle(): Promise<Refresh.Model>
}

export namespace Refresh {
  export type Model = {
    acessToken: string
  }
}