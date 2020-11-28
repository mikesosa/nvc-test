import React, { useEffect } from 'react';
import { Card, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { getDetail, showsSelector } from '../../store/slices/shows';
import MainLayout from '../../components/templates/MainLayout';

function ShowDetail() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const { loadingShows, showDetail } = useSelector(showsSelector);

  const fetchDetail = async () => {
    // eslint-disable-next-line
    console.log('llega', url);
    try {
      dispatch(getDetail(url.split('/')[2]));
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <MainLayout>
      {loadingShows && 'Loading..'}
      <Card>
        <Card.Grid
          hoverable={false}
          style={{ width: '30%', textAlign: 'center' }}>
          <Image
            src={
              showDetail
                ? `https://image.tmdb.org/t/p/w500${showDetail.poster_path}`
                : ''
            }
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: '70%' }}>
          Content
        </Card.Grid>
      </Card>
    </MainLayout>
  );
}

export default ShowDetail;
