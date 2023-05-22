
import React, { PropsWithChildren, createContext, useState } from "react";
import { AUTH_TOKEN_KEY } from "../constants/application";
import { AuthService } from "../services/AuthService/AuthService";


export const AuthContext = createContext({
  token: '' as string | undefined,
  authorize: async (login: string, password: string): Promise<void> => { },
});

export const AuthProvider: React.FC<PropsWithChildren> = (props) => {
  const [token, setToken] = useState<string>();

  const authorize = async (login: string, password: string): Promise<void> => {
    const tokenData = await AuthService.auth(login, password);
    localStorage.setItem(AUTH_TOKEN_KEY, tokenData.access_token);
    setToken(tokenData.access_token)
  }

  return (
    <AuthContext.Provider value={{ token, authorize }}>
      {props.children}
    </AuthContext.Provider>
  )
};