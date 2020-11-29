import React from 'react';
import { Layout, Input, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getShows, showsSelector } from '../../../store/slices/shows';
import { LoadingOutlined, LeftCircleOutlined } from '@ant-design/icons';
import './HeaderNav.less';

const { Search } = Input;
const { Header } = Layout;

function HeaderNav() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loadingShows } = useSelector(showsSelector);
  const antIcon = <LoadingOutlined style={{ color: '#FFF' }} spin />;

  // Handle search
  const onSearch = (value) => {
    if (path !== '/') history.push('/');
    if (value) dispatch(getShows({ searchQuery: value, searchPage: 1 }));
  };

  return (
    <Header className="header-nav">
      <div className="logo">
        <a href="/">SHOWS</a>
        {path !== '/' && (
          <a href="/" className="return-btn">
            <LeftCircleOutlined />
          </a>
        )}
      </div>
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
