import React from "react";
import {Layout} from "antd";
import {inject, observer} from "mobx-react";
const {Sider} = Layout;

const LeftMenu: React.FC = ({global}: any) => {
  return (
    <Sider
      trigger={null}
      collapsedWidth={50}
      className="scroll ant-menu"
      style={{
        overflowX: 'hidden',
        zIndex: 1000
      }}
      theme={"dark"}
      collapsed={global.isCollapse}
      collapsible
    >
      <div className="layout-sider">
        <div className="pro-sider scroll">
          菜单部分
        </div>
      </div>

    </Sider>
  );
}
export default inject("global")(observer(LeftMenu));