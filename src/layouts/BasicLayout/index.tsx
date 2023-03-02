import React from "react";
import {Layout} from "antd";
import LeftMenu from "@/layouts/LeftMenu";
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";

const BasicLayout: React.FC = () => {
  return (
    <Layout style={{height: '100%'}}>
      <Layout>
        {/* 左边菜单 */}
        <LeftMenu/>
        <Layout>
          {/* 顶部 */}
          <Header/>
          {/*<div className="tagsView-container">
                        <TagList/>
                    </div>*/}
          {/* 中间内容区域 */}
          <Content/>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default BasicLayout;