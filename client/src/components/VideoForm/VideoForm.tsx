import { Form, Upload, Input, Button } from "antd"
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import { VideoService } from "../../services/Video/VideoService";
import { useNavigate } from "react-router-dom";



export const VideoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | undefined>();
  const [video, setVideo] = useState<File | undefined>();
  const [progressI, setProgressI] = useState(0)
  const [progressV, setProgressV] = useState(0)
  const navigate = useNavigate();

  const normFile = (e: any) => {
    console.log(e)
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const beforeUploadImage = async (file: File) => {
    setProgressI(100);
    setImage(file);
  };

  const beforeUploadVideo = async (file: File) => {
    setProgressV(100);
    setVideo(file);
  };

  const create = () => {
    const formDataBody = new FormData();

    const jsonData = {
      name: name,
      description: description
    }

    formDataBody.append('file_video', video as File);
    formDataBody.append('json_data', JSON.stringify(jsonData));
    formDataBody.append('file_preview', image as File);

    VideoService.create(formDataBody);
    navigate('/')
  }
  


  return (
    <div className="video-create-form">
      <Form>
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

        <div>
          <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload 
              listType="picture-card" 
              maxCount={1} 
              multiple={false} 
              action={undefined}
              beforeUpload={beforeUploadVideo}
              customRequest={() => {
                return;
              }}
              progress={{ success: { percent: progressV } }}
            >
              <div>
                <PlusOutlined />
                <div>Загрузите видео</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
              listType="picture-card"
              maxCount={1}
              multiple={false}
              action={undefined}
              beforeUpload={beforeUploadImage}
              customRequest={() => {
                return;
              }}
              progress={{ success: { percent: progressI } }}
            >
              <div>
                <PlusOutlined />
                <div>Загрузите превью</div>
              </div>
            </Upload>
          </Form.Item>

        </div>

        {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}> */}
          <Button type="primary" className='indent' onClick={create}>
            Создать
          </Button>
        {/* </Form.Item> */}
      </Form>
    </div>
  )
}
