import { AliClientInstance } from "../../api/ApiClient"

export const RegisterService = {
  register: async (body: any) => {
    const data = await AliClientInstance.postWithoutAuth<any>('/register', body)

    return data;
  }
}