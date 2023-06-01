import { Avatar, Col, Row, Button} from 'antd'
import { HeartOutlined, UserOutlined  } from '@ant-design/icons';
import { TableData } from '../../type/Card.types'
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { VideoService } from "../../services/Video/VideoService";
import './TableInfo.css'
import { useState } from 'react';

interface ITableInfo {
  table: TableData
}

export const TableInfo = ({table} : ITableInfo) => {
  const [size, setSize] = useState<SizeType>('large');
  const { id, author, description, like} = table
  // const [likes, setLikes] = useState(Number);

  const putLike = async () => {
    VideoService.like(id);
  }

  return (
  <div className='tab'>
    <Row>
      <Col span={8} className='author'>
        {/* <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" size={45}/> */}
        <Avatar size={43} icon={<UserOutlined />} className='author-img'/> 
       {author} 
      </Col>
      <Col span={8} offset={0}>
        <div className='like'>
          <Button  shape="round" size={size}>{like} <HeartOutlined onClick={putLike}/></Button>
        </div>
      </Col>
    </Row>
    <div className='description'>{description}</div>
  </div>
  )
    }