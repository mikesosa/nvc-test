import React, { useState } from 'react';
import { List, Spin, message } from 'antd';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/templates/MainLayout';
import ShowCard from '../../components/organisms/ShowCard';
import InfiniteScroll from 'react-infinite-scroller';
import { getShows } from '../../store/slices/shows';

function Home() {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // useEffect;

  const fetchData = async () => {
    try {
      let res = await dispatch(getShows());
      setData(res);
    } catch (e) {
      message.error(e);
    }
    // reqwest({
    //   url: fakeDataUrl,
    //   type: 'json',
    //   method: 'get',
    //   contentType: 'application/json',
    //   success: (res) => {
    //     callback(res);
    //   }
    // });
  };

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      setLoading(false);
      setHasMore(false);
      return;
    }
    fetchData((res) => {
      this.setState({
        data,
        loading: res
      });
    });
  };

  return (
    <MainLayout>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <ShowCard item={item} />
            </List.Item>
          )}>
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
      ,
    </MainLayout>
  );
}

export default Home;
