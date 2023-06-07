import React, { useState } from 'react';
import {
  HeartOutlined,
  HomeOutlined,
  SettingOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd/es/menu';

import "./Navigation.css"
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'Главная',
    key: 'main',
    icon: <HomeOutlined />,
  },
  {
    label: 'Понравившиеся',
    key: 'liked',
    icon: <HeartOutlined />,
  },
  {
    label: 'Мои видео',
    key: 'video',
    icon: <HeartOutlined />,
  },
];

export const Navigation = () => {
  const [current, setCurrent] = useState('main');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    const { key } = e;
    if (key === 'main') {
      navigate('/')
    } else if (key === 'liked') {
      navigate('/like')
    } else if (key === 'video') {
      navigate('/my')
    }
    setCurrent(key);
  };

  return (
    <div className='menu-wrapper'>
      <Menu
        className='menu'
        selectedKeys={[current]}
        onClick={onClick}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};