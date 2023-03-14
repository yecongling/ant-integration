import React from "react";
import {Card, Col, Image, Row, Statistic, Timeline} from "antd";
import header from "@/assets/images/avatar.png";
import {ArrowUpOutlined, SmileOutlined} from "@ant-design/icons";

const Index: React.FC = () => {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <Card bodyStyle={{justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Image src={header} width={70}></Image>
              <div className="pl-12px" style={{marginLeft: '12px'}}>
                <h3 className="text-18px font-semibold">早安，叶丛林, 今天又是充满活力的一天！</h3>
                <p className="leading-30px text-[#999]">今日多云转晴，20℃ - 25℃！</p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-start',
              gap: '24px'
            }}>
              <Statistic
                title="项目数"
                value={11}
                precision={2}
                valueStyle={{color: '#3f8600'}}
                prefix={<ArrowUpOutlined/>}
              />
              <Statistic
                title="代办"
                value={11}
                suffix=" / 100"
              />
              <Statistic
                title="消息"
                value={11}
                precision={2}
                valueStyle={{color: '#3f8600'}}
                prefix={<ArrowUpOutlined/>}
              />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: '6px'}}>
        <Col span={6}>
          <Card style={{
            backgroundImage: 'linear-gradient(to right bottom, rgb(236, 71, 134), rgb(185, 85, 164))'
          }}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{color: '#3f8600'}}
              prefix={<ArrowUpOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{
            backgroundImage: 'linear-gradient(to right bottom, rgb(134, 94, 192), rgb(81, 68, 180))'
          }}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{color: '#3f8600'}}
              prefix={<ArrowUpOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{
            backgroundImage: 'linear-gradient(to right bottom, rgb(86, 205, 243), rgb(113, 157, 227))'
          }}>
            <Statistic
              title="Active"
              value={11.28}
              valueStyle={{color: 'white'}}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{
            backgroundImage: 'linear-gradient(to right bottom, rgb(252, 188, 37), rgb(246, 128, 87))'
          }}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{color: '#3f8600'}}
              prefix={<ArrowUpOutlined/>}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}  style={{marginTop: '6px'}}>
        <Col span={7}>
          <Card>
            <Timeline
              items={[
                {
                  color: 'green',
                  children: 'Create a services site 2015-09-01',
                },
                {
                  color: 'green',
                  children: 'Create a services site 2015-09-01',
                },
                {
                  color: 'red',
                  children: (
                    <>
                      <p>Solve initial network problems 1</p>
                      <p>Solve initial network problems 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: '#00CCFF',
                  dot: <SmileOutlined/>,
                  children: <p>Custom color testing</p>,
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </>

  )
};

export default Index;
