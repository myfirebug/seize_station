import React, { FC } from "react";
import { IRepliyItem } from "@service/index";
import { timeUtil } from "@src/utils";
import { Link } from "react-router-dom";
import Module from "../../components/module";
// 头像
import Avatar from "../../components/avatar";
import "./index.scss";

interface IReply {
  replies: IRepliyItem[];
}

const Reply: FC<IReply> = ({ replies }) => {
  return (
    <Module
      className="cms-reply"
      style={{ marginTop: "15px" }}
      title={`${replies.length}　回复`}
    >
      {replies.map((item, index) => (
        <div className="cms-reply__item" key={item.id}>
          <div className="card">
            <Avatar
              size="small"
              avatar={item.author.avatar_url}
              alt={item.author.loginname}
            />
            <div className="content">
              <div className="user-info">
                <Link to={`/user/${item.author.loginname}`}>
                  {item.author.loginname}
                </Link>
                <span className="reply-time">{`${
                  index + 1
                }楼 • ${timeUtil.timeAgo(item.create_at)}`}</span>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </Module>
  );
};

export default Reply;
