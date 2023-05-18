
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";


export const AuthContext = createContext({
  token: '' as string | undefined,
  authorize: async (login: string, password: string): Promise<void> => {},
});

type AuthResponse = {
  access_token: string,
  token_type: string,
}

export const AuthProvider: React.FC<PropsWithChildren> = (props) => {
  const [token, setToken] = useState<string>();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const requestOptions ={
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer' + token,
  //       },
  //     };

  //     const response = await fetch('/users/me', requestOptions);

  //     if (!response.ok) {
  //       setToken('');
  //     }
  //     localStorage.setItem("awesomeLeadsToken", token);
  //   };
  //   fetchUser();
  // }, [token]);

  const authorize = async (login: string, password: string): Promise<void> => {
    const formDataBody = new FormData()
    formDataBody.append('username', login);
    formDataBody.append('password', password);
    const response = await fetch('/login', {
      method: 'POST',
      body: formDataBody
    });
  
    const data: AuthResponse = await response.json();
    console.log(data)
    setToken(data.access_token)
  }

  return (
    <AuthContext.Provider value={{token, authorize}}>
      {props.children}
    </AuthContext.Provider>
  )
};