import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Module from "../../../components/module";
import { timeUtil } from "@src/utils";
import { useTopic } from "@core/hook";
import { Loading } from "@src/components";
import "./index.scss";
import { ITab } from "@src/service";
import Avatar from "../../../components/avatar";
import { NoData } from "@src/components";
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
    <Module className="cms-topics">
      <div className="cms-tab">
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
      </div>

      {topicsLoading ? <Loading type={1} text="加载中..." /> : null}
      {!topics.length && <NoData />}

      {topics.map((item) => (
        <div className="cms-topics__item" key={item.id}>
          <div className="hd">
            <Avatar
              avatar={item.author.avatar_url}
              alt={item.author.loginname}
            />
            <div className="content">
              <Link className="loginname" to={`/user/${item.author.loginname}`}>
                {item.author.loginname}
              </Link>
              <div className="create-time">
                {timeUtil.timeAgo(item.create_at)}
              </div>
            </div>
            {item.good || item.top || !currentTab ? (
              <span
                className={`label ${item.good || item.top ? "is-active" : ""}`}
              >
                {getLabel(item.good, item.tab, item.top)}
              </span>
            ) : null}
          </div>
          <Link className="bd" to={`/topic/${item.id}`}>
            {item.title}
          </Link>
          <div className="ft">
            <span className="replies">{item.reply_count}</span>
            <span className="visits">{item.visit_count}</span>
          </div>
        </div>
      ))}
    </Module>
  );
};

export default Topics;
