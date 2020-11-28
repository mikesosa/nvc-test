import React from 'react';
import { Layout } from 'antd';
import HeaderNav from '../../organisms/HeaderNav';
import { node, string } from 'prop-types';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout>
      <HeaderNav>Hi</HeaderNav>
      <Content style={{ padding: '2rem', minHeight: '280px' }}>
        {children}
      </Content>
    </Layout>
  );
}

MainLayout.propTypes = {
  title: string,
  sidenav: node.isRequired,
  children: node.isRequired
};

export default MainLayout;
