import React from "react";
import {Avatar, Badge, Calendar, Card, Col, Row} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import favicon from "@/assets/images/favicon.png";

const Index: React.FC = () => {
    return (
      <>
          <Card
            style={{ width: 300 }}
            cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
          >
              <Meta
                avatar={<Avatar src={favicon} />}
                title="Card title"
                description="This is the description"
              />
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
          <Calendar style={{marginTop: '6px'}}/>
      </>

    )
};

export default Index;
