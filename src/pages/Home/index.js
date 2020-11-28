import React from 'react';
import { Card, List } from 'antd';
import MainLayout from '../../components/templates/MainLayout';
// import InfiniteScroll from 'react-infinite-scroller';

const { Meta } = Card;
function Home() {
  const data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },

    {
      title: 'Title 4'
    }
  ];
  return (
    <MainLayout>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title={item.title} />
            </Card>
          </List.Item>
        )}
      />
      ,
    </MainLayout>
  );
}

export default Home;
