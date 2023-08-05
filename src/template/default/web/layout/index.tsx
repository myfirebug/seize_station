import React, { memo } from "react";
import { Layout } from "@src/components";
// 头部组件
import Header from "../components/header";
// 尾部组件
import Footer from "../components/footer";
import "./index.scss";

const CurrentLayout = memo(() => {
  return (
    <Layout
      className="cms-layout-default"
      Header={<Header />}
      Footer={<Footer />}
      paddingTop="50px"
      mainMinHeight="calc(100vh - 107px)"
    />
  );
});

export default CurrentLayout;
