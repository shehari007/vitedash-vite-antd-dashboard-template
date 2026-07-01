import {
  Card,
  Avatar,
  Typography,
  Row,
  Col,
  Tabs,
  Descriptions,
  Tag,
  Space,
  Button,
  Form,
  Input,
  List,
  Progress,
} from 'antd';
import { UserOutlined, EditOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const skills = [
  { name: 'Product Strategy', level: 90 },
  { name: 'UI/UX Design', level: 78 },
  { name: 'React & TypeScript', level: 85 },
  { name: 'Team Leadership', level: 70 },
];

const activity = [
  'Completed the Q2 roadmap review',
  'Shipped the new onboarding flow',
  'Led the design system workshop',
  'Published the accessibility audit',
];

const ProfileOverview = () => (
  <Row gutter={[16, 16]}>
    <Col xs={24} lg={12}>
      <Card title="About">
        <Descriptions column={1} size="small">
          <Descriptions.Item label="Full Name">Muhammad Sheharyar Butt</Descriptions.Item>
          <Descriptions.Item label="Role">Product Designer</Descriptions.Item>
          <Descriptions.Item label="Department">Design</Descriptions.Item>
          <Descriptions.Item label="Location">
            <EnvironmentOutlined /> Lahore, Pakistan
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            <MailOutlined /> shehariyar@gmail.com
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            <PhoneOutlined /> +92 300 0000000
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Col>
    <Col xs={24} lg={12}>
      <Card title="Skills">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Text>{skill.name}</Text>
                <Text type="secondary">{skill.level}%</Text>
              </Space>
              <Progress percent={skill.level} showInfo={false} />
            </div>
          ))}
        </Space>
      </Card>
    </Col>
    <Col span={24}>
      <Card title="Recent Activity">
        <List
          dataSource={activity}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    </Col>
  </Row>
);

const ProfileEdit = () => (
  <Card>
    <Form layout="vertical" initialValues={{ name: 'Muhammad Sheharyar Butt', email: 'shehariyar@gmail.com', role: 'Product Designer' }}>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item label="Full Name" name="name">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item label="Role" name="role">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Location" name="location">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Bio" name="bio">
        <Input.TextArea rows={4} placeholder="Tell us about yourself" />
      </Form.Item>
      <Button type="primary">Save Changes</Button>
    </Form>
  </Card>
);

const Profile = () => {
  return (
    <div>
      <Card style={{ marginBottom: 24 }}>
        <Row gutter={[24, 16]} align="middle">
          <Col>
            <Avatar size={80} icon={<UserOutlined />} />
          </Col>
          <Col flex="auto">
            <Title level={4} style={{ marginBottom: 4 }}>
              Muhammad Sheharyar Butt
            </Title>
            <Space wrap>
              <Tag color="blue">Product Designer</Tag>
              <Tag color="green">Active</Tag>
            </Space>
          </Col>
          <Col>
            <Button icon={<EditOutlined />}>Edit Profile</Button>
          </Col>
        </Row>
      </Card>

      <Tabs
        defaultActiveKey="overview"
        items={[
          { key: 'overview', label: 'Overview', children: <ProfileOverview /> },
          { key: 'edit', label: 'Edit Profile', children: <ProfileEdit /> },
        ]}
      />
    </div>
  );
};

export default Profile;
