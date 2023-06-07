import { SearchForm } from "../Search/Search"
import { Col, Row, Avatar, Button, Tooltip } from 'antd';
import { QqOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate();

  const create = () => {
    navigate('/create')
  }

  return (
    <Row align='middle'>
      <Col span={2}>
        <QqOutlined /> Мой Ютюб
      </Col>
      <Col span={12} offset={6}>
        <SearchForm />
      </Col>
      <Col span={2} offset={2} className="action-column">
        <Tooltip title="Создать видео">
          <Button disabled={!token} onClick={create}><VideoCameraAddOutlined /></Button>
        </Tooltip>
        <Avatar icon={<UserOutlined />} className='author-img' />
      </Col>
    </Row>
  )
}