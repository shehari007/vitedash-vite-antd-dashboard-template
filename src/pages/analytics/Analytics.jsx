import { Card, Row, Col, Typography, Progress, Statistic, Space, Segmented } from 'antd';
import { useState } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const trafficSources = [
  { label: 'Organic Search', value: 42, color: '#1677ff' },
  { label: 'Direct', value: 26, color: '#52c41a' },
  { label: 'Social Media', value: 18, color: '#faad14' },
  { label: 'Referral', value: 14, color: '#eb2f96' },
];

const weeklyVisitors = [
  { day: 'Mon', value: 62 },
  { day: 'Tue', value: 74 },
  { day: 'Wed', value: 58 },
  { day: 'Thu', value: 88 },
  { day: 'Fri', value: 95 },
  { day: 'Sat', value: 47 },
  { day: 'Sun', value: 40 },
];

const Analytics = () => {
  const [range, setRange] = useState('7d');

  return (
    <div>
      <Space style={{ width: '100%', justifyContent: 'space-between', marginBottom: 24 }} wrap>
        <div>
          <Title level={4} style={{ marginBottom: 4 }}>
            Analytics
          </Title>
          <Text type="secondary">{"Key metrics built with Ant Design's Progress and Statistic components."}</Text>
        </div>
        <Segmented
          value={range}
          onChange={setRange}
          options={[
            { label: '7 Days', value: '7d' },
            { label: '30 Days', value: '30d' },
            { label: '90 Days', value: '90d' },
          ]}
        />
      </Space>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Page Views"
              value={128430}
              suffix={
                <Text type="success" style={{ fontSize: 14 }}>
                  <ArrowUpOutlined /> 18%
                </Text>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Bounce Rate"
              value={34.6}
              suffix={
                <Text type="danger" style={{ fontSize: 14 }}>
                  <ArrowDownOutlined /> 4%
                </Text>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Avg. Session"
              value="4m 12s"
              suffix={
                <Text type="success" style={{ fontSize: 14 }}>
                  <ArrowUpOutlined /> 6%
                </Text>
              }
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title="Traffic Sources">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {trafficSources.map((source) => (
                <div key={source.label}>
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Text>{source.label}</Text>
                    <Text type="secondary">{source.value}%</Text>
                  </Space>
                  <Progress percent={source.value} showInfo={false} strokeColor={source.color} />
                </div>
              ))}
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Weekly Visitors">
            <Space align="end" size="middle" style={{ width: '100%', justifyContent: 'space-between', height: 180 }}>
              {weeklyVisitors.map((entry) => (
                <Space
                  key={entry.day}
                  direction="vertical"
                  align="center"
                  size={8}
                  style={{ height: '100%', justifyContent: 'flex-end' }}
                >
                  <Progress
                    type="dashboard"
                    percent={entry.value}
                    size={44}
                    format={() => ''}
                    strokeColor="#1677ff"
                  />
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {entry.day}
                  </Text>
                </Space>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
