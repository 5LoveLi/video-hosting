import { Form, Upload, Input, Button, Row, Col } from "antd"
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import { VideoService } from "../../services/Video/VideoService";
import { useNavigate } from "react-router-dom";


const { TextArea } = Input;

export const VideoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | undefined>();
  const [video, setVideo] = useState<File | undefined>();
  const [progressI, setProgressI] = useState(0);
  const [progressV, setProgressV] = useState(0);
  const [warMassageI, setWarMassageI] = useState('');
  const [warMassageV, setWarMassageV] = useState('')
  const navigate = useNavigate();

  const normFile = (e: any) => {
    console.log(e)
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const beforeUploadImage = async (file: File) => {
    const str = file.name

    if (str.endsWith('.jpg') || str.endsWith('.png')) {
      setWarMassageI('')
      setProgressI(100);
      setImage(file);
    } else {
      setProgressI(0);
      setWarMassageI('Необходимо загрузить превью с расширением .jpeg или .png')
    }
    
  };

  const beforeUploadVideo = async (file: File) => {
    const str = file.name

    if (str.endsWith('.mp4')) {
      setWarMassageV('')
      setProgressV(100);
      setVideo(file);
    } else {
      setProgressV(0);
      setWarMassageV('Необходимо загрузить видео с расширением .mp4')
  }
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
    // <div>
    <Row>
      <Col span={4} offset={3}>
        <Form style={{ maxWidth: 300 }}>
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

          <Form.Item className="create-name">
            <TextArea
              placeholder='описание'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>

          {/* <div> */}
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
              <p className="massage">{warMassageV}</p>
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
              <p className="massage">{warMassageI}</p>
            </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" className='indent' onClick={create} disabled={image === undefined || video === undefined || name === ''}>
            Создать
          </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
