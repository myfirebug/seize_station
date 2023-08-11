import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTopic } from "@core/hook";
import Module from "../components/module";
import { timeUtil } from "@src/utils";
import "./index.scss";
import { Link } from "react-router-dom";
// 回复列表
import Reply from "./reply";

interface ITopic {}

const Topic: FC<ITopic> = () => {
  const { id } = useParams();
  const { getTopic, topicDetail, getLabel } = useTopic();

  useEffect(() => {
    getTopic(id as string);
  }, [id, getTopic]);
  return (
    <>
      <Module className="cms-topic">
        <div className="cms-topic__header">
          <h1 className="title">{topicDetail?.title}</h1>
          <div className="labels">
            <span>发布于 {timeUtil.timeAgo(topicDetail.create_at)}</span>
            <span>
              作者
              <Link to={`/user/${topicDetail.author.loginname}`}>
                {topicDetail.author.loginname}
              </Link>
            </span>
            <span> {topicDetail.visit_count} 次浏览</span>
            <span>
              来自
              {getLabel(topicDetail?.good, topicDetail?.tab, topicDetail?.top)}
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
    </>
  );
};

export default Topic;
