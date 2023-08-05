import { useState, useCallback } from "react";
import { ITopicItem, API, ITab } from "@service/index";
export interface ITopicsParams {
  // 页数
  page: number;
  // 主题分类
  tab: ITab;
  // 每一页的主题数量
  limit: number;
  //  当为 false 时，不渲染。默认为 true
  mdrender?: boolean;
}
export function useTopic() {
  // 获取所有主题数据
  const [topics, setTopics] = useState<ITopicItem[]>([]);
  // 是否处理loading状态
  const [topicsLoading, setTopicsLoading] = useState<boolean>(false);
  // 获取主题列表数据
  const getTopics = useCallback((params: ITopicsParams) => {
    setTopicsLoading(true);
    API.topicService
      .getTopics(params)
      .then((data) => {
        setTopics(data);
        setTopicsLoading(false);
      })
      .catch(() => {
        setTopicsLoading(false);
      });
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
  return {
    topics,
    topicsLoading,
    getTopics,
    getLabel,
  };
}
