import { Flex, Input, Form, Button, Space, Typography, Divider, Checkbox, Alert, theme } from 'antd';
import { MailOutlined, LockOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from '../../layout/AuthLayout';
import handleSignIn from '../../Utils/Auth/SignIn';

const { Text } = Typography;

const SignIn = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const handleOnSubmit = async (values) => {
    await handleSignIn(values);
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Enter your credentials to access the dashboard."
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Alert
          type="info"
          showIcon
          message="Demo login is already filled in below. Click Sign In to continue."
          style={{ fontSize: 13 }}
        />

        <Form
          onFinish={handleOnSubmit}
          layout="vertical"
          style={{ width: '100%' }}
          initialValues={{ remember: true, email: 'admin@vitedash.com', password: 'password123' }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: '#bfbfbf' }} />}
              placeholder="you@example.com"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <RouterLink to="/forgot-password" style={{ color: colorPrimary }}>
                Forgot password?
              </RouterLink>
            </Flex>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" size="large" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <Divider plain style={{ margin: 0 }}>
          <Text type="secondary">or continue with</Text>
        </Divider>

        <Flex gap="middle" style={{ width: '100%' }}>
          <Button icon={<GoogleOutlined />} size="large" style={{ flex: 1 }}>
            Google
          </Button>
          <Button icon={<GithubOutlined />} size="large" style={{ flex: 1 }}>
            GitHub
          </Button>
        </Flex>

        <Text type="secondary" style={{ textAlign: 'center', display: 'block' }}>
          {"Don't have an account? "}
          <RouterLink to="/signup" style={{ color: colorPrimary, fontWeight: 600 }}>
            Sign up now
          </RouterLink>
        </Text>
      </Space>
    </AuthLayout>
  );
};

export default SignIn;
