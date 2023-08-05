import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Module from "../../../components/module";
import { timeAgo } from "@src/utils";
import { useTopic } from "@core/hook";
import { Loading } from "@src/components";
import "./index.scss";
import { ITab } from "@src/service";
interface ITopics {}

const Topics: FC<ITopics> = () => {
  const { getTopics, topics, getLabel, topicsLoading } = useTopic();
  const [tabs] = useState([
    {
      name: "全部",
      value: "",
    },
    {
      name: "精华",
      value: "good",
    },
    {
      name: "分享",
      value: "share",
    },
    {
      name: "问答",
      value: "ask",
    },
    {
      name: "招聘",
      value: "job",
    },
    {
      name: "客户端测试",
      value: "dev",
    },
  ]);
  const [currentTab, setCurrentTab] = useState<ITab>("");

  useEffect(() => {
    getTopics({
      page: 1,
      tab: currentTab,
      limit: 40,
    });
  }, [getTopics, currentTab]);
  return (
    <Module
      className="cms-topics"
      title={
        <>
          {tabs.map((item) => (
            <span
              className={`cms-tab__item ${
                currentTab === item.value ? "is-active" : ""
              }`}
              onClick={() => setCurrentTab(item.value as ITab)}
              key={item.value}
            >
              {item.name}
            </span>
          ))}
        </>
      }
    >
      {topicsLoading ? <Loading type={1} text="加载中..." /> : null}

      {topics.map((item) => (
        <div className="cms-topics__item" key={item.id}>
          <Link to={`/user/${item.author_id}`} className="user-avatar">
            <img src={item.author.avatar_url} alt={item.author.loginname} />
          </Link>
          <div className="count">
            <span className="replies">{item.reply_count}</span>
            <span className="visits">{item.visit_count}</span>
          </div>
          {item.good || item.top || !currentTab ? (
            <span
              className={`label ${item.good || item.top ? "is-active" : ""}`}
            >
              {getLabel(item.good, item.tab, item.top)}
            </span>
          ) : null}

          <Link className="title" to={`/topic/${item.id}`}>
            {item.title}
          </Link>
          <span className="create-time">{timeAgo(item.create_at)}</span>
        </div>
      ))}
    </Module>
  );
};

export default Topics;
