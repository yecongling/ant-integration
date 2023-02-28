import React from "react";
import {Layout} from "antd";
import LeftMenu from "@/layouts/LeftMenu";
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";

const BasicLayout: React.FC = () => {
  return (
    <Layout style={{height: '100%'}}>
      {/* 左边菜单部分 */}
      <LeftMenu/>
      <Layout>
        {/* 头部 */}
        <Header/>
        {/* 中间内容区域 */}
        <Content/>
      </Layout>
    </Layout>
  )
}
export default BasicLayout;