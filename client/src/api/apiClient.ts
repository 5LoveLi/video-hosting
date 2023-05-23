import { AUTH_TOKEN_KEY } from "../constants/application";


const get = async <T>(path: string): Promise<T> => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  const res = await fetch(path, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  const data = res.json() as T;

  return data;
}
export const getWithoutAuth = async <T>(path: string): Promise<T> => {
  const res = await fetch(path, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  })
  const data = res.json() as T;

  return data;
}

const post = async <T>(path: string, body?: any): Promise<T> => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  const res = await fetch(path, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body,
  })
  const data = res.json() as T;

  return data;
}

export const ApiClient = {
  get,
  getWithoutAuth,
  post,
}