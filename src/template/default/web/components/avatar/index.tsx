import React, { FC } from "react";
import "./index.scss";
interface IAvatar {
  avatar: string;
  alt?: string;
  isRound?: boolean;
  size?: "default" | "small" | "large";
}

const Avatar: FC<IAvatar> = ({
  avatar,
  alt = "图片",
  isRound = false,
  size = "default",
}) => {
  return (
    <div
      className={`cms-avatar cms-avatar__${size} ${isRound ? "is-round" : ""}`}
    >
      <img src={avatar} alt={alt} />
    </div>
  );
};

export default Avatar;
