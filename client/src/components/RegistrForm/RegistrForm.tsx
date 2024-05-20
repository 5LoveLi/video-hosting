import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import './RegistrForm.css'
import { RegisterService } from '../../services/RegisterService/RegisterService';

export const RegistrForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<undefined | 'error' >(undefined);
  const [message, setMessage] = useState('');
  const navigate  = useNavigate();


  const register = async (event: any) => {
    event.preventDefault();

    const form = {
      login: login,
      password: password,
    }  

    try {
      setLoginStatus(undefined);
      setMessage('');
      await RegisterService.register(form)
      navigate('/authorization')
    } catch (error) {
      setLoginStatus('error');
      setMessage('Такой логин уже существует!')
    }
  }

  
  return (<>
    <Form className='table'>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input 
          status={loginStatus}
          placeholder='Login' 
          className='Input' 
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
          placeholder='Password' 
          className='Input' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" className='indent' onClick={register}>
          Register
        </Button>
      </Form.Item>
    </Form>
  </>
  )
} 