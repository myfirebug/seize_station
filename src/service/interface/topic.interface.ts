// tab 类型
export type ITab = "ask" | "share" | "job" | "good" | "dev" | "";

// 主题活动
export interface ITopicItem {
  // 键值
  id: string;
  // 作者ID
  author_id: string;
  // 类型
  tab: ITab;
  // 主题类型
  content: string;
  // 主题标题
  title: string;
  // 最后评论时间
  last_reply_at: string;
  //
  good: boolean;
  // 置顶
  top: boolean;
  // 评论数
  reply_count: number;
  // 访问数
  visit_count: number;
  // 创建时间
  create_at: string;
  author: {
    // 登录名
    loginname: string;
    // 头像
    avatar_url: string;
  };
}
// 评论数据
export interface IRepliyItem {
  // 评论ID
  id: string;
  author: {
    // 登录名
    loginname: string;
    // 头像
    avatar_url: string;
  };
  // 内容
  content: string;
  // 点赞ID
  ups: string[];
  // 时间
  create_at: string;
  // 回复Id
  reply_id?: string;
  // 是否点赞
  is_uped: boolean;
}
// 活动详情
export interface ITopicDetail extends ITopicItem {
  replies: IRepliyItem[];
}
