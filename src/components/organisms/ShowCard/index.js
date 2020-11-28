import React from 'react';
import { Card } from 'antd';
import { node } from 'prop-types';

const { Meta } = Card;

function ShowCard({ item }) {
  return (
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
  );
}

ShowCard.propTypes = {
  item: node.isRequired
};

export default ShowCard;
