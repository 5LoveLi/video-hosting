import { TOKEN_KEY } from "../constants/all";

export class ApiClient {
  prefix: string
  
  constructor() {
    this.prefix = '/api'
  }

  async get <T>(path: string): Promise<T> {
    const token = localStorage.getItem(TOKEN_KEY) as string
    const res = await fetch(`${this.prefix}${path}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  
    if (res.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.href = '/authorization'
    }
    const data = res.json() as T;
  
    return data;
  }

  async getWithoutAuth <T>(path: string): Promise<T> {
    const res = await fetch(`${this.prefix}${path}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const data = res.json() as T;
    return data;
  }

  async post <T>(path: string, body?: any): Promise<T> {
    try {
      const token = localStorage.getItem(TOKEN_KEY) as string
      const res = await fetch(`${this.prefix}${path}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body,
      })
  
      if (res.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        window.location.href = '/authorization'
      }
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = res.json() as T;
      return data;
  
    } catch (error) {
      console.log(error)
      return Promise.reject(error);
    }
  }

  async postWithoutAuth <T>(path: string, body?: any) {
    try {
      const res = await fetch(`${this.prefix}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json() as T;
      return data;
  
    } catch (error) {
      return Promise.reject(error);
    }
  }

}

export const AliClientInstance = new ApiClient()