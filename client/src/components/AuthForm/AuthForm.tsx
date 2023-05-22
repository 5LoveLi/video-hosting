import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';

import { AuthContext } from '../../context/AuthContext';



export const AuthForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { authorize } = useContext(AuthContext)

  const auth = async () => {
    await authorize(login, password)
  }


  return (<>
    <Form className='table'>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input
          placeholder='Login'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" className='indent' onClick={auth}>
          Login
        </Button>
      </Form.Item>
    </Form>
  </>
  )
} 