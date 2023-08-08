import { Topic } from "../api";
import { ITopicItem, ITopicDetail } from "../interface";
import axios from "../fetch";

const topicService = {
  // 主题首页
  getTopics(params: any) {
    return axios.get<ITopicItem[], ITopicItem[]>(Topic.getTopics, { params });
  },
  // 主题详情
  getTopic(id: string) {
    return axios.get<ITopicDetail, ITopicDetail>(Topic.getTopic(id));
  },
};

export default topicService;
