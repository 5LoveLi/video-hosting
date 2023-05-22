import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';

import './RegistrForm.css'



export const RegistrForm = () => {

  const [inputLogin, setInputLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  // const [, setToken] = useContext(UserContext);


  const submitRegistration = async (event: any) => {
    event.preventDefault();

    if (password === repeatPassword) {
      const form = {
        login: inputLogin,
        password: password,
      } 

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      }

      const response = await fetch('/register', requestOptions);
      const data = await response.json();

      if (!response.ok) {
        console.log('не удалось зарегестрироваться');
      } else {
        // setToken(data.message);
      }
    }
    
  }

  
  return (<>
    <Form className='table'>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input 
          placeholder='Login' 
          className='Input' 
          value={inputLogin}
          />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='Password' className='Input' value={password} />
      </Form.Item>

      <Form.Item
        name="repeat password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='Repeat password' className='Input' value={repeatPassword}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className='indent' onClick={submitRegistration}>
          Register
        </Button>
      </Form.Item>
    </Form>
  </>
  )
} 