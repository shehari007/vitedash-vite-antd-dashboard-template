import {
  Card,
  Tabs,
  Typography,
  Form,
  Input,
  Switch,
  Button,
  Space,
  Divider,
  Radio,
  Select,
} from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useThemeMode } from '../../context/useThemeMode';

const { Title, Text } = Typography;

const GeneralSettings = () => (
  <Card>
    <Form layout="vertical" initialValues={{ language: 'en', timezone: 'utc' }}>
      <Form.Item label="Workspace Name" name="workspace">
        <Input placeholder="My Company" />
      </Form.Item>
      <Form.Item label="Language" name="language">
        <Select
          options={[
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'ur', label: 'Urdu' },
          ]}
        />
      </Form.Item>
      <Form.Item label="Timezone" name="timezone">
        <Select
          options={[
            { value: 'utc', label: 'UTC' },
            { value: 'pkt', label: 'Pakistan Standard Time' },
            { value: 'est', label: 'Eastern Time' },
          ]}
        />
      </Form.Item>
      <Button type="primary">Save Changes</Button>
    </Form>
  </Card>
);

const AppearanceSettings = () => {
  const { mode, setMode, isDark } = useThemeMode();

  return (
    <Card>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Text strong>Theme Mode</Text>
          <div style={{ marginTop: 8 }}>
            <Radio.Group
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              optionType="button"
              buttonStyle="solid"
              options={[
                { label: <><SunOutlined /> Light</>, value: 'light' },
                { label: <><MoonOutlined /> Dark</>, value: 'dark' },
              ]}
            />
          </div>
          <Text type="secondary" style={{ display: 'block', marginTop: 8 }}>
            {"Applied instantly across the app via Ant Design's ConfigProvider. You're currently in "}
            <strong>{isDark ? 'dark' : 'light'}</strong> mode.
          </Text>
        </div>
        <Divider style={{ margin: 0 }} />
        <div>
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <div>
              <Text strong>Compact Sidebar</Text>
              <div>
                <Text type="secondary">Start with the sidebar collapsed on desktop</Text>
              </div>
            </div>
            <Switch defaultChecked={false} />
          </Space>
        </div>
      </Space>
    </Card>
  );
};

const SecuritySettings = () => (
  <Card>
    <Form layout="vertical">
      <Form.Item label="Current Password" name="currentPassword">
        <Input.Password />
      </Form.Item>
      <Form.Item label="New Password" name="newPassword">
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm New Password" name="confirmPassword">
        <Input.Password />
      </Form.Item>
      <Divider />
      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <div>
          <Text strong>Two-Factor Authentication</Text>
          <div>
            <Text type="secondary">Add an extra layer of security to your account</Text>
          </div>
        </div>
        <Switch />
      </Space>
      <Divider />
      <Button type="primary">Update Security Settings</Button>
    </Form>
  </Card>
);

const NotificationSettings = () => (
  <Card>
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {[
        { title: 'Product Updates', description: 'News about product and feature updates' },
        { title: 'Security Alerts', description: 'Important notifications about your account security' },
        { title: 'Weekly Digest', description: 'A summary of activity from the past week' },
      ].map((item) => (
        <Space key={item.title} style={{ width: '100%', justifyContent: 'space-between' }}>
          <div>
            <Text strong>{item.title}</Text>
            <div>
              <Text type="secondary">{item.description}</Text>
            </div>
          </div>
          <Switch defaultChecked />
        </Space>
      ))}
    </Space>
  </Card>
);

const Settings = () => {
  return (
    <div>
      <Title level={4} style={{ marginBottom: 4 }}>
        Settings
      </Title>
      <Text type="secondary">Manage your workspace, appearance, and account preferences.</Text>

      <Tabs
        style={{ marginTop: 24 }}
        defaultActiveKey="general"
        items={[
          { key: 'general', label: 'General', children: <GeneralSettings /> },
          { key: 'appearance', label: 'Appearance', children: <AppearanceSettings /> },
          { key: 'security', label: 'Security', children: <SecuritySettings /> },
          { key: 'notifications', label: 'Notifications', children: <NotificationSettings /> },
        ]}
      />
    </div>
  );
};

export default Settings;
