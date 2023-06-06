import React, { useState } from 'react';
import {
  HeartOutlined,
  HomeOutlined,
  SettingOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { Menu} from 'antd';
import type { MenuProps } from 'antd/es/menu';

import "./Navigation.css"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  disabled?: Boolean
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    disabled
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <a href={'/'} rel="noopener noreferrer">
      Главное
    </a>,
    'link',
    <HomeOutlined style={{ fontSize: '20px'}}/>, 
    ),
  
  getItem(
    <a href={'/like'} rel="noopener noreferrer">
      Понравившиеся
    </a>,
    'link',
    <HeartOutlined style={{ fontSize: '20px'}}/>, 
    // false,
    ),



  getItem('Мои видео', 'sub1', <PlaySquareOutlined style={{ fontSize: '20px'}}/>),
  getItem('Navigation Three', 'sub2', <SettingOutlined style={{ fontSize: '20px'}}/>),
  // getItem(
  //   <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //     Ant Design
  //   </a>,
  //   'link',
  //   // <LinkOutlined />,
  // ),
];

export const Navigation = () => {


  return (
    <div className='myMenu'>
      <Menu
        style={{ width: 78,}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={true}
        items={items}
      />
    </div>
  );
};