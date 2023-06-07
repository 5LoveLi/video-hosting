import { AUTH_TOKEN_KEY } from "../constants/application";


export const get = async <T>(path: string): Promise<T> => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  const res = await fetch(path, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (res.status === 401) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    window.location.href = '/authorization'
  }
  const data = res.json() as T;

  return data;
}
export const getWithoutAuth = async <T>(path: string): Promise<T> => {
  const res = await fetch(path, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = res.json() as T;

  return data;
}

export const post = async <T>(path: string, body?: any): Promise<T> => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  try {
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body,
    })

    if (res.status === 401) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
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

export const postWithoutAuth = async <T>(path: string, body?: any) => {
  try {
    const res = await fetch(path, {
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


export const ApiClient = {
  get,
  getWithoutAuth,
  post,
  postWithoutAuth,
}