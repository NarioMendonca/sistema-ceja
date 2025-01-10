import { getStorage, setStorage } from "@/data/protocols/cache";

export class LocalStorageAdapter implements getStorage, setStorage {
  get(key: string): any {
    const value = localStorage.getItem(key)
    if (!value) {
      return null
    }
    return JSON.parse(value)
  }

  set(key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }
}