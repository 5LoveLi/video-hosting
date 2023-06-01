import { ApiClient } from "../../api/apiClient"

export const RegisterService = {
  register: async (body: any) => {
    const data = await ApiClient.postWithoutAuth<any>('/register', body)

    return data;
  }
}