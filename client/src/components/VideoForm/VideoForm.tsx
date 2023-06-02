import { Form, Upload, Input, Button } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";



export const VideoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const create = () => {
    const formDataBody = new FormData();

    const jsonData = {
      name: name, 
      description: description
    }

    formDataBody.append('file_video', '');
    formDataBody.append('json_data', JSON.stringify(jsonData));
    formDataBody.append('file_preview', '');
  }


  return(<>
  <Form className='table'>
    <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
      <Upload action="/upload.do" listType="picture-card">
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Загрузите видео</div>
        </div>
      </Upload>
    </Form.Item>

    <Form.Item  valuePropName="fileList" getValueFromEvent={normFile}>
      <Upload action="/upload.do" listType="picture-card">
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Загрузите превью</div>
        </div>
      </Upload>
    </Form.Item>

    <Form.Item
        name="username"
        rules={[{ required: true, message: 'Пожалуста укажите название видео' }]}
    >
      <Input 
        placeholder="Название видео" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Form.Item>

    <Form.Item>
      <Input 
        placeholder='описание'
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" className='indent' onClick={create}>
        Создать
      </Button>
    </Form.Item>
  </Form>
  </>)
  }
