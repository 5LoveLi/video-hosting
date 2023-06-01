import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { AuthContext } from '../../context/AuthContext';



export const AuthForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<undefined | 'error' >(undefined);
  const [message, setMessage] = useState('');
  const { authorize } = useContext(AuthContext)

  const navigate  = useNavigate();

  const auth = async () => {
    try {
      await authorize(login, password)
      navigate('/')
    } catch (error) {
      setStatus('error')
      setMessage('логин или пароль не верный!')
    }
    
  }


  return (<>
    <Form className='table'>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input
          status={status}
          placeholder='Login'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <p className='massage'>{message}</p>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          status={status}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />
          <p className='massage'>{message}</p>
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