import React from "react";
import {Drawer} from "antd";

export interface draw {
  open: boolean,
  change?: Function
}

/* 系统配置界面 */
const Setting: React.FC<draw> = (props) => {
  const {open, change} = props;
  const closeDrawer = () => {
    change && change(false)
  }
  return (
    <>
      <Drawer title="系统设置" placement="right" open={open} onClose={closeDrawer}>
        <p>系统设置部分</p>
      </Drawer>
    </>
  )
}

export default Setting;