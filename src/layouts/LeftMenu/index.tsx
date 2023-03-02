import React, {useState} from "react";
import {Layout, MenuProps, Image} from "antd";
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";
import AdminConfig from "@/config/global";
import favicon from "@/assets/images/favicon.png";

const {Sider} = Layout;

const LeftMenu: React.FC = ({global}: any) => {
  // 定义 menu 类型
  type MenuItem = Required<MenuProps>["items"][number];
  const [menuList, setMenuList] = useState<MenuItem[]>([]);

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
          <div className="menu">
            <Link to={AdminConfig.HOME_ROUTER_PATH}>
              <div className="hd-64 mgr-01 dis-fl ai-ct jc-ct">
                <Image width={25} src={favicon} preview={false}/>
                {global.isCollapse ?
                  '' : <p style={{
                    fontWeight: 'bold',
                    margin: '0 12px',
                    fontSize: '16px',
                    color: 'white'
                  }}>
                    {AdminConfig.ADMIN_NAME}
                  </p>
                }
              </div>
            </Link>
          </div>
        </div>
      </div>

    </Sider>
  );
}
export default inject("global")(observer(LeftMenu));