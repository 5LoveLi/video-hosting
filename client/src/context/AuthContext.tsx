
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import { AuthService } from "../services/AuthService/AuthService";
import { TOKEN_KEY } from "../constants/all";


export const AuthContext = createContext({
  token: '' as string | undefined,
  authorize: async (login: string, password: string): Promise<void> => { },
});

export const AuthProvider: React.FC<PropsWithChildren> = (props) => {
  const [token, setToken] = useState<string>('');

  const authorize = async (login: string, password: string): Promise<void> => {
    const tokenData = await AuthService.auth(login, password);
    localStorage.setItem(TOKEN_KEY, tokenData.access_token);
    setToken(tokenData.access_token)
  }

  const tokenTimeout = () => {
    // localStorage.removeItem(token);
    setToken('');
  }

  useEffect(() => {
    const localToken = localStorage.getItem(TOKEN_KEY);
    setToken(localToken || '');
  }, [])
  

  return (
    <AuthContext.Provider value={{ token, authorize }}>
      {props.children}
    </AuthContext.Provider>
  )
};