import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Card } from 'antd';
import { object } from 'prop-types';
import './ShowCard.less';
import { setSelectedShow } from '../../../store/slices/shows';

const { Meta } = Card;

function ShowCard({ item }) {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);
  let defatult = '/v5D7K4EHuQHFSjveq8LGxdSfrGS.jpg';
  const history = useHistory();
  const { path } = useRouteMatch();

  const handleCick = async (show) => {
    await dispatch(setSelectedShow(show));
    history.push(`${path}detail/${show.id}`);
  };

  return (
    <Card
      onClick={() => handleCick(item)}
      hoverable
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
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
      {showDescription && (
        <div className="description-cover">
          Rating: <span>{item.popularity}</span>
        </div>
      )}
      <Meta title={item.title ? item.title : item.name} />
    </Card>
  );
}

ShowCard.propTypes = {
  item: object.isRequired
};

export default ShowCard;
