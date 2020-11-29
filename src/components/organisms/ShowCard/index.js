import React, { useState } from 'react';
import { Card } from 'antd';
import { object } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { setSelectedShow } from '../../../store/slices/shows';
import './ShowCard.less';

const { Meta } = Card;

function ShowCard({ item }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const defaultImg = '/v5D7K4EHuQHFSjveq8LGxdSfrGS.jpg'; // Fallback img
  const [showDescription, setShowDescription] = useState(false);

  // Handle click on show
  const handleClick = async (show) => {
    await dispatch(setSelectedShow(show));
    history.push(`${path}detail/${show.id}`);
  };

  return (
    <Card
      onClick={() => handleClick(item)}
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
              : defaultImg
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
