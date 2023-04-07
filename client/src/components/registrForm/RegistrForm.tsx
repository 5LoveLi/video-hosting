import React from 'react';
import { Button, Form, Input } from 'antd';

import './RegistrForm.css'



export const RegistrForm = () => {
  return (<>
    <Form className='table'>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input placeholder='Login' className='Input' />
      </Form.Item>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Username' className='Input' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='Password' className='Input' />
      </Form.Item>

      <Form.Item
        name="repeat password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='Repeat password' className='Input' />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox className='indent'>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className='indent'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>
  )
} 