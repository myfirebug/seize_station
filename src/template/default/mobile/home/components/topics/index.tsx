import React, { FC } from "react";
import { Link } from "react-router-dom";
import Module from "../../../components/module";
import { timeUtil } from "@src/utils";
import { useTopic } from "@core/hook";
import { Loading } from "@src/components";
import "./index.scss";
import Avatar from "../../../components/avatar";
import { NoData } from "@src/components";
import { ITopicItem } from "@src/service";

interface ITopics {
  topics: ITopicItem[];
  topicsLoading: boolean;
}

const Topics: FC<ITopics> = ({ topics, topicsLoading }) => {
  const { getLabel } = useTopic();

  return (
    <Module className="cms-topics">
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
            {item.good || item.top ? (
              <span
                className={`label ${item.good || item.top ? "is-active" : ""}`}
              >
                {getLabel(item.good, item.tab, item.top)}
              </span>
            ) : null}
          </div>
          <Link
            className="bd"
            to={{
              pathname: `/topic/${item.id}`,
              search: `title=${item.title}`,
            }}
          >
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
