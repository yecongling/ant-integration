import React, {useState} from "react";
import {Avatar, Badge, Dropdown, Layout, MenuProps, Modal, Space} from "antd";
import {inject, observer} from "mobx-react";
import {
  BellOutlined,
  ExclamationCircleOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined, UserOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import Setting from "@/layouts/Setting";

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
        <div className="dis-fl js-sb ai-ct">
          <Space style={{cursor: 'pointer'}} size="middle">
            <div className="login-user"
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   width: 20,
                   height: 30,
                   transition: 'all 0.3s'
                 }} title="通知">
              <Badge>
                <BellOutlined style={{verticalAlign: 'middle', cursor: 'pointer', padding: '4px'}}/>
              </Badge>
            </div>
            <SettingOutlined style={{verticalAlign: 'middle', cursor: 'pointer'}} title="系统设置"
                             onClick={changeSetting}/>
            <Dropdown menu={{items}} placement="bottom">
              <div className="login-user" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                transition: 'all 0.3s'
              }}>
                <Avatar size="small" icon={<UserOutlined/>}/>
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