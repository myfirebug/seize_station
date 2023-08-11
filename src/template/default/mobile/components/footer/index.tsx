import React, { memo } from "react";
import "./index.scss";
interface IFooter {}

const Footer = memo((props: IFooter) => {
  return (
    <footer className="cms-footer">
      <div className="cms-footer__content">
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。
      </div>
    </footer>
  );
});

export default Footer;
