import React, { useEffect, useState } from 'react';
import { List, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/templates/MainLayout';
import ShowCard from '../../components/organisms/ShowCard';
import InfiniteScroll from 'react-infinite-scroller';
import { getShows, showsSelector } from '../../store/slices/shows';
import './Home.less';

function Home() {
  const dispatch = useDispatch();
  const [showsList, setShowsList] = useState([]);
  const { searchQuery, shows, pages } = useSelector(showsSelector);

  useEffect(() => {
    if (shows && pages.currentPage !== 1) {
      let temp = showsList;
      setShowsList(temp.concat(shows));
    } else {
      setShowsList(shows);
    }
  }, [shows, pages]);

  const fetchShows = async (queryPage) => {
    try {
      await dispatch(
        getShows({
          searchQuery: searchQuery.searchQuery,
          searchPage: queryPage
        })
      );
      document.documentElement.scrollTop = 0;
    } catch (e) {
      message.error(e);
    }
  };

  const handleInfiniteOnLoad = () => {
    if (pages.total_pages === pages.currentPage) {
      message.warning('Infinite List loaded all');
    } else {
      fetchShows(pages.currentPage + 1);
    }
  };

  return (
    <MainLayout>
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={true}
          useWindow={false}>
          <List
            grid={{ gutter: 16, column: 6 }}
            dataSource={showsList}
            renderItem={(item) => (
              <List.Item>
                <ShowCard item={item} />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </MainLayout>
  );
}

export default Home;
