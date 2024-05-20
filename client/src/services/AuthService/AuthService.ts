import { AliClientInstance } from "../../api/ApiClient";
import { AuthScheme } from "./AuthService.types";

export const AuthService = {
  auth: async (login: string, password: string) => {
    const formDataBody = new FormData()
    formDataBody.append('username', login);
    formDataBody.append('password', password);

    const tokenData = await AliClientInstance.post<AuthScheme>('/login', formDataBody);

    return tokenData;
  }
}