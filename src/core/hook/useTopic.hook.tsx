import { useState, useCallback } from "react";
import { ITopicItem, API, ITab, ITopicDetail } from "@service/index";
import { browserUtil } from "@src/utils";
export interface ITopicsParams {
  // 页数
  page: number;
  // 主题分类
  tab: ITab;
  // 每一页的主题数量
  limit: number;
  //  当为 false 时，不渲染。默认为 true
  mdrender?: boolean;
  // 是否需要更新
  update?: string | number;
}
export function useTopic() {
  // 获取所有主题数据
  const [topics, setTopics] = useState<ITopicItem[]>([]);
  // 是否还有数据
  const [isMore, setIsMore] = useState<boolean>(true);
  // 是否处理loading状态
  const [topicsLoading, setTopicsLoading] = useState<boolean>(false);
  // 获取主题列表数据
  const getTopics = useCallback(async (params: ITopicsParams) => {
    setTopicsLoading(true);
    const data = await API.topicService.getTopics(params);
    if (browserUtil.isMobile()) {
      params.page === 1
        ? setTopics(data)
        : setTopics((state) => [...state, ...data]);
    } else {
      setTopics(data);
    }
    setTopicsLoading(false);
    setIsMore(data && data.length ? true : false);
  }, []);

  const getLabel = useCallback((good: boolean, tab: ITab, top: boolean) => {
    let str = "";
    if (good) {
      str = "精华";
    } else if (top) {
      str = "置顶";
    } else {
      switch (tab) {
        case "share":
          str = "分享";
          break;
        case "ask":
          str = "问答";
          break;
        case "job":
          str = "招聘";
          break;
        default:
          str = "暂无";
      }
    }
    return str;
  }, []);

  // 主题详情数据
  const [topicDetail, setTopicDetail] = useState<ITopicDetail>({
    id: "",
    author_id: "",
    tab: "",
    content: "",
    title: "",
    last_reply_at: "",
    good: false,
    top: false,
    reply_count: 0,
    visit_count: 0,
    create_at: "",
    author: {
      loginname: "",
      avatar_url: "",
    },
    replies: [],
  });
  const [topicDetailLoading, setTopicDetailLoading] = useState(false);

  const getTopic = useCallback((id: string) => {
    setTopicDetailLoading(true);
    API.topicService
      .getTopic(id)
      .then((data) => {
        setTopicDetail(data);
        setTopicDetailLoading(false);
      })
      .catch(() => {
        setTopicDetailLoading(false);
      });
  }, []);

  return {
    topics,
    topicsLoading,
    getTopics,
    topicDetail,
    topicDetailLoading,
    getTopic,
    getLabel,
    isMore,
  };
}
