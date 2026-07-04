import { Flex, Input, Form, Button, Space, Typography, Checkbox, theme } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
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
        <Form
          onFinish={handleOnSubmit}
          layout="vertical"
          style={{ width: '100%' }}
          initialValues={{ remember: true }}
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
