import React from 'react';
import { Layout } from 'antd';
import { node } from 'prop-types';

const { Content } = Layout;

function EmptyLayout({ children }) {
  return (
    <Layout>
      <Content style={{ padding: '2rem', minHeight: '100vh' }}>
        {children}
      </Content>
    </Layout>
  );
}

EmptyLayout.propTypes = {
  children: node.isRequired
};

export default EmptyLayout;
