import React from "react";
import {Avatar, Badge, Calendar, Card, Col, Row} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import favicon from "@/assets/images/favicon.png";
import {Pie} from "@ant-design/charts";

const Index: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '数量',
      },
    },
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <Card
        style={{width: 300}}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting"/>,
          <EditOutlined key="edit"/>,
          <EllipsisOutlined key="ellipsis"/>,
        ]}
      >
        <Meta
          avatar={<Avatar src={favicon}/>}
          title="Card title"
          description="This is the description"
        />
      </Card>

      <Card style={{width: 400}}>
        <Pie {...config}/>
      </Card>

      <Row gutter={6} style={{marginTop: '6px'}}>
        <Col span={6}>
          <Badge.Ribbon text="Hippies" color="purple">
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
    </>

  )
};

export default Index;
