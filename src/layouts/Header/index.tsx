import React, {useState} from "react";
import {Avatar, Badge, Dropdown, Layout, MenuProps, Modal, Space, Tooltip} from "antd";
import {inject, observer} from "mobx-react";
import avatar from "@/assets/images/avatar.png";
import {
  BellOutlined,
  ExclamationCircleOutlined, GithubOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined, SearchOutlined,
  SettingOutlined, UserOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import Setting from "@/layouts/Setting";
import FullScreen from "@/component/header/FullScreen";
import BreadcrumbNav from "@/component/header/BreadcrumbNav";

const Header: React.FC = ({global}: any) => {
  const {isCollapse, setCollapse, setToken} = global;
  const [open, setOpen] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '个人中心',
      icon: <UserOutlined/>,
      disabled: false
    },
    {
      key: '2',
      label: '系统设置',
      icon: <SettingOutlined/>,
      disabled: false,
      onClick: function () {
        setOpen(!open);
      }
    },
    {
      key: '3',
      label: '退出登录',
      icon: <LogoutOutlined/>,
      disabled: false,
      onClick: function () {
        modal.confirm({
          title: 'Confirm',
          icon: <ExclamationCircleOutlined/>,
          content: '确认退出登录吗？',
          okText: '确认',
          onOk: function () {
            // 清空token
            setToken("");
            // 退出到登录页面
            navigate("/login");
          },
          cancelText: '取消',
        });
      }
    },
  ]

  /**
   * 开关设置界面
   *
   */
  const changeSetting = () => {
    setOpen(!open);
  }

  /**
   * 改变抽屉
   * @param val
   */
  const change = (val: boolean) => {
    setOpen(val);
  }

  return (
    <>
      <Layout.Header
        className="ant-layout-header dis-fl jc-sb ai-ct"
        style={{
          padding: '0 16px 0 0',
          height: '48px',
          borderBottom: ' 1px solid #f0f1f2',
          backgroundColor: '#fff'
        }}>
      <span
        style={{
          cursor: 'pointer',
          fontSize: '16px',
          marginLeft: '6px'
        }}
        onClick={() => {
          setCollapse(!isCollapse)
        }}
        className="btnbor"
      >
                    <div style={{marginLeft: '6px', padding: '10px 0'}}>
                        {React.createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </div>
                </span>
        <BreadcrumbNav/>
        <div className="dis-fl js-sb ai-ct">
          <Space size="large">
            <Tooltip placement="bottom" title="搜索">
              <SearchOutlined style={{cursor: 'pointer', fontSize: '18px'}}/>
            </Tooltip>
            <Tooltip placement="bottom" title="github">
              <GithubOutlined style={{cursor: 'pointer', fontSize: '18px'}}/>
            </Tooltip>
            <Tooltip placement="bottom" title="通知">
              <Badge count={5}>
                <BellOutlined style={{cursor: 'pointer', fontSize: '18px'}}/>
              </Badge>
            </Tooltip>
            <FullScreen/>
            <Tooltip placement="bottom" title="系统设置">
              <SettingOutlined style={{cursor: 'pointer', fontSize: '18px'}} onClick={changeSetting}/>
            </Tooltip>
            <Dropdown menu={{items}} placement="bottom">
              <div className="login-user" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                transition: 'all 0.3s'
              }}>
                <Avatar size="default" src={avatar}/>
                <span style={{margin: '0 0 0 6px'}}>叶丛林</span>
              </div>
            </Dropdown>
          </Space>
        </div>
      </Layout.Header>
      {/* 系统设置 */}
      <Setting open={open} change={change}/>
      {contextHolder}
    </>
  )
}
export default inject("global")(observer(Header));