import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTopic } from "@core/hook";
import Module from "../components/module";
import { timeAgo } from "@src/utils";
import "./index.scss";
import { Link } from "react-router-dom";
// 回复列表
import Reply from "./reply";
// 头像
import Avatar from "../components/avatar";

interface ITopic {}

const Topic: FC<ITopic> = () => {
  const { id } = useParams();
  const { getTopic, topicDetail, getLabel } = useTopic();

  useEffect(() => {
    getTopic(id as string);
  }, [id, getTopic]);
  return (
    <div className="cms-layout__center">
      <div className="cms-layout__left">
        <Module className="cms-topic">
          <div className="cms-topic__header">
            <h1 className="title">{topicDetail?.title}</h1>
            <div className="labels">
              <span>发布于 {timeAgo(topicDetail.create_at)}</span>
              <span>
                作者
                <Link to={`/user/${topicDetail.author.loginname}`}>
                  {topicDetail.author.loginname}
                </Link>
              </span>
              <span> {topicDetail.visit_count} 次浏览</span>
              <span>
                来自
                {getLabel(
                  topicDetail?.good,
                  topicDetail?.tab,
                  topicDetail?.top
                )}
              </span>
            </div>
          </div>
          <div
            className="cms-topic__body"
            dangerouslySetInnerHTML={{
              __html: topicDetail?.content as string,
            }}
          ></div>
        </Module>
        {topicDetail.replies.length ? (
          <Reply replies={topicDetail.replies} />
        ) : null}
      </div>
      <div className="cms-layout__right">
        <Module className="cms-topic" title="作者">
          <Link
            className="user_card"
            to={`/user/${topicDetail.author.loginname}`}
          >
            <Avatar
              avatar={topicDetail.author.avatar_url}
              alt={topicDetail.author.loginname}
              size="large"
            />
            <span className="user_name">{topicDetail.author.loginname}</span>
          </Link>
        </Module>
      </div>
    </div>
  );
};

export default Topic;
