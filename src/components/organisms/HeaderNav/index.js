import React from 'react';
import { Layout, Menu, Input } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
import './HeaderNav.less';
const { Search } = Input;

const { Header } = Layout;

function HeaderNav() {
  const onSearch = (value) => console.log(value);

  return (
    <Header className="header-nav">
      <h1 className="logo">SHOWS</h1>
      <Menu
        className="menu-search"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}>
        <Search
          placeholder="Type a movie name"
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
        />
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
  );
}

export default HeaderNav;
