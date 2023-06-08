import { Avatar, Col, Row, Button} from 'antd'
import { HeartOutlined, UserOutlined  } from '@ant-design/icons';
import { TableData } from '../../type/Card.types'
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import './TableInfo.css'
import { useState } from 'react';
import { VideoPlayType } from '../../services/Video/VideoService.types';

interface ITableInfo {
  videoData: VideoPlayType,
  viewOnly: boolean,
  toggleLike: (id: number) => {}
}

export const TableInfo = ({videoData, toggleLike, viewOnly} : ITableInfo) => {
  const [size, setSize] = useState<SizeType>('large');
  const { id, author, description, like} = videoData

  // console.log(viewOnly)

  const putLike = async () => {
    toggleLike(id); 
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
          <Button  shape="round" size={size} onClick={putLike} disabled={viewOnly}>{like} <HeartOutlined/></Button>
        </div>
      </Col>
    </Row>
    <div className='description'>{description}</div>
  </div>
  )
    }