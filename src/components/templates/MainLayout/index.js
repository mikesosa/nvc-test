import React from 'react';
import { Layout } from 'antd';
import HeaderNav from '../../organisms/HeaderNav';
import { node } from 'prop-types';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout>
      <HeaderNav>Hi</HeaderNav>
      <Content style={{ padding: '6rem 2rem 2rem 2rem', minHeight: '280px' }}>
        {children}
      </Content>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: node.isRequired
};

export default MainLayout;
