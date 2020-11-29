import React, { useEffect, useState } from 'react';
import { Card, Tabs, List, Avatar } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/templates/MainLayout';
import { getDetail, showsSelector, getSeason } from '../../store/slices/shows';
import './ShowDetail.less';

const { Meta } = Card;
const { TabPane } = Tabs;

function ShowDetail() {
  const [details, setDetails] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState('0');
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const {
    loadingShows,
    showDetail,
    selectedShow,
    seasonDetail,
    errorShows
  } = useSelector(showsSelector);

  // Get selected show detail
  const fetchDetail = async () => {
    try {
      dispatch(
        getDetail({
          showId: url.split('/')[2],
          mediaType: selectedShow.media_type
        })
      );
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  };

  // In case of tv show get specific season
  const fetchSeason = async (tvId, seasonNumber) => {
    try {
      dispatch(
        getSeason({
          tvId,
          seasonNumber
        })
      );
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  };

  // Call fetch details on load
  useEffect(() => {
    fetchDetail();
  }, []);

  // If detail then set them locally in the component to better performance
  useEffect(() => {
    if (showDetail) setDetails(showDetail);
  }, [showDetail]);

  // If a tv show call fetch season
  useEffect(() => {
    if (details) fetchSeason(details.id, parseInt(selectedSeason) + 1);
  }, [selectedSeason, details]);

  // TV show details
  const tvDetail = () => (
    <Tabs
      type="card"
      defaultActiveKey={selectedSeason}
      activeKey={selectedSeason}
      onChange={(tab) => setSelectedSeason(tab)}>
      {errorShows && <p>{errorShows}</p>}
      {seasonDetail &&
        details.seasons.map((season, idx) => {
          return (
            <TabPane
              tab={`Season ${season.season_number}`}
              key={idx}
              className="tab-content">
              <h3>{season.name}</h3>
              <List
                itemLayout="horizontal"
                dataSource={seasonDetail.episodes}
                renderItem={(item, idx) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<FireOutlined />} />}
                      title={
                        <span>
                          Episode {idx}: - {item.name} -
                        </span>
                      }
                      description={item.overview}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
          );
        })}
    </Tabs>
  );

  // Movie details
  const movieDetail = () => {
    return (
      <>
        <h3>Genres:</h3>
        <ul>
          {details.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h3>Overview:</h3>
        <p>{details.overview}</p>
        <h3>
          Original language:{' '}
          <span className="uppercase">{details.original_language}</span>
        </h3>
        <h3>
          Release date:{' '}
          <span className="uppercase">{details.release_date}</span>
        </h3>
      </>
    );
  };

  return (
    <MainLayout>
      {loadingShows && 'Loading..'}
      {details && (
        <Card className="card-detail">
          <Card.Grid
            hoverable={false}
            style={{ width: '30%', textAlign: 'center' }}>
            <Card
              cover={
                <img
                  alt="example"
                  src={
                    details
                      ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                      : ''
                  }
                />
              }>
              <Meta
                title={
                  details.name
                    ? details.name
                    : details.original_name
                    ? details.original_name
                    : details.original_title
                }
              />
            </Card>
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: '70%', padding: '2rem' }}>
            {selectedShow.media_type === 'tv' && details
              ? tvDetail()
              : movieDetail()}
          </Card.Grid>
        </Card>
      )}
    </MainLayout>
  );
}

export default ShowDetail;
