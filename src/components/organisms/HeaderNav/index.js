import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Input, Spin } from 'antd';
import { getShows, showsSelector } from '../../../store/slices/shows';
import { LoadingOutlined } from '@ant-design/icons';
import './HeaderNav.less';

const { Search } = Input;
const { Header } = Layout;

function HeaderNav() {
  const dispatch = useDispatch();
  const { loadingShows } = useSelector(showsSelector);
  const onSearch = (value) => {
    if (value) dispatch(getShows({ searchQuery: value, searchPage: 1 }));
  };
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <Header className="header-nav">
      <h1 className="logo">SHOWS</h1>
      <div className="menu-search">
        {loadingShows && (
          <div className="demo-loading-container">
            <Spin indicator={antIcon} />
          </div>
        )}
        <Search
          placeholder="Type a movie name"
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </div>
    </Header>
  );
}

export default HeaderNav;
