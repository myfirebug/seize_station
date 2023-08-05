import React, { FC, useEffect, useState } from "react";
import "./index.scss";
interface ILoading {
  text?: string;
  type: 1 | 2 | 3 | 4 | 5;
}

const Loading: FC<ILoading> = ({ text, type }) => {
  const [doms, setDoms] = useState<number[]>([]);
  useEffect(() => {
    if (type === 4) {
      setDoms(new Array(3).fill(0));
    } else if (type === 5) {
      setDoms(new Array(12).fill(0));
    } else {
      setDoms([]);
    }
  }, [type]);
  return (
    <div className="cms-loading">
      <div className="cms-loading__body">
        <div className={`cms-loading__${type}`}>
          {doms.map((item, index) => (
            <div className={`circle${index + 1}`}></div>
          ))}
        </div>
        {text && <div className="cms-loading__text">{text}</div>}
      </div>
    </div>
  );
};

export default Loading;
