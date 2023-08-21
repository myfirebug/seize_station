import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import { ITopicsParams, useTopic } from "@src/core/hook";
// 选项卡
import Tabs from "./components/tab";
// 列表
import Topics from "./components/topics";

import InfiniteScroll from "@src/mobileComponents/infiniteScroll";

import PullToRefresh from "@src/mobileComponents/pullToRefresh";

const Home = () => {
  const [params, setParams] = useState<ITopicsParams>({
    page: 1,
    limit: 20,
    tab: "",
    update: 0,
  });
  const { getTopics, topics, topicsLoading, isMore } = useTopic();

  const loadMore = useCallback(async () => {
    if (topicsLoading || !isMore) return;
    await getTopics(params);
    setParams((state) => ({
      ...state,
      page: state.page + 1,
    }));
  }, [getTopics, isMore, params, topicsLoading]);

  const pullToRefreshHandler = useCallback(() => {
    setParams((state) => ({
      ...state,
      page: 1,
      update: new Date().getTime(),
    }));
  }, [setParams]);

  useEffect(() => {
    if (params.page === 1) {
      window.scrollTo(0, 0);
    }
  }, [params.page]);

  return (
    <div className="cms-home">
      <Tabs params={params} setParams={setParams} />
      <PullToRefresh callBack={pullToRefreshHandler} infinite={2000}>
        <Topics topics={topics} topicsLoading={topicsLoading} />
        <InfiniteScroll
          loadMore={loadMore}
          isMore={isMore}
          visible={params.page !== 1}
          update={params.update}
        />
      </PullToRefresh>
    </div>
  );
};

export default Home;
