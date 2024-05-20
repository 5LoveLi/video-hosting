import { SearchForm } from "../Search/Search"
import { Col, Row, Avatar, Button, Tooltip, MenuProps, Space, Dropdown, message } from 'antd';
import { UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import './Header.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from "../../constants/all";

const authorizedMenu: MenuProps['items'] = [
  {
    key: '1',
    label: 'Выйти'
  },
];
const unAuthorizedMenu: MenuProps['items'] = [
  {
    key: '2',
    label: 'Войти'
  },
];

export const Header: React.FC = () => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if( e.key === '1') {
      localStorage.removeItem(TOKEN_KEY);
      navigate('/')
      window.location.reload();
    } else {
      navigate('/authorization')
    }

  };

  const getItem = () => {
    if (!token) {
      return unAuthorizedMenu 
    } else {
      return authorizedMenu
    }
  }
  
  const menuProps = {
    items: getItem(),
    onClick: handleMenuClick,
  };
  

  const create = () => {
    navigate('/create')
  }
  
  return (
    <Row align='middle'>
      <Col span={2}>
        <img alt='' src="http://127.0.0.1:9000/hosting/%D0%BB%D0%BE%D0%B3%D0%BE.jpg?" width='80'></img>
      </Col>
      <Col span={12} offset={6}>
        <SearchForm />
      </Col>
      <Col span={2} offset={2} className="action-column">
        <Tooltip title="Создать видео" className="bottom-create">
          <Button disabled={!token} onClick={create}><VideoCameraAddOutlined /></Button>
        </Tooltip>
        <Space direction="vertical">
          <Dropdown menu={menuProps} placement="bottomLeft" >
            <Avatar icon={<UserOutlined />} className='author-img'  size={46}></Avatar>
          </Dropdown>
        </Space>
      </Col>
    </Row>
  )
}