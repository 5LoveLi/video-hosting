import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';

import { AuthContext } from '../../context/AuthContext';



export const AuthForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {authorize} = useContext(AuthContext)


  // const submitRegistration = async (event: any) => {
  //   event.preventDefault();

  //     const form = {
  //       login: inputLogin,
  //       password: password,
  //     } 

  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json'},
  //       body: JSON.stringify(form)
  //     }

  //     const response = await fetch('/register', requestOptions);
  //     const data = await response.json();

  //     if (!response.ok) {
  //       console.log('не удалось зарегестрироваться');
  //     } else {
  //       // setToken(data.message);
  //     }
  //   }
    
  // }

  const auth = () => {
    authorize(login, password)
  }

  
  return (
    <Form className='table'>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input 
          placeholder='Login' 
          className='Input'
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='Password' className='Input' value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" className='indent' onClick={auth}>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
} 