import { ApiClient } from "../../api/apiClient";
import { AuthScheme } from "./AuthService.types";

export const AuthService = {
  auth: async (login: string, password: string) => {
    const formDataBody = new FormData()
    formDataBody.append('username', login);
    formDataBody.append('password', password);

    const tokenData = await ApiClient.post<AuthScheme>('/login', formDataBody);

    return tokenData;
  }
}