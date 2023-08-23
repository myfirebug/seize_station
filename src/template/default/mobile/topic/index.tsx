import React, { FC, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { useTopic } from "@core/hook";
import Module from "../components/module";
import { timeUtil } from "@src/utils";
import "./index.scss";
// 回复列表
import Reply from "./reply";
import Loading from "@src/components/loading/loading";

interface ITopic {}

const Topic: FC<ITopic> = () => {
  const { id } = useParams();
  const { getTopic, topicDetail, getLabel, topicDetailLoading } = useTopic();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getTopic(id as string);
  }, [id, getTopic]);
  return (
    <>
      <Module className="cms-topic">
        {topicDetailLoading ? <Loading type={1} text="加载中..." /> : null}
        <div className="cms-topic__header">
          <h1 className="title">
            {topicDetail?.title || searchParams.get("title")}
          </h1>
          <div className="labels">
            <span>
              发布于 {timeUtil.timeAgo(topicDetail.create_at) || "--"}
            </span>
            <span>
              作者
              <Link to={`/user/${topicDetail.author.loginname}`}>
                {topicDetail.author.loginname || "--"}
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
