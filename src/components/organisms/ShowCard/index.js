import React from 'react';
import { Card } from 'antd';
import { object } from 'prop-types';

const { Meta } = Card;

function ShowCard({ item }) {
  let defatult = '/v5D7K4EHuQHFSjveq8LGxdSfrGS.jpg';
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${
            item.poster_path
              ? item.poster_path
              : item.backdrop_path
              ? item.backdrop_path
              : defatult
          }`}
        />
      }>
      <Meta title={item.title ? item.title : item.name} />
    </Card>
  );
}

ShowCard.propTypes = {
  item: object.isRequired
};

export default ShowCard;
