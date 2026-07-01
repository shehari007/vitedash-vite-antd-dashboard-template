import {
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  Radio,
  Checkbox,
  Slider,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  App,
} from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Forms = () => {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const handleFinish = (values) => {
    message.success('Form submitted successfully');
    console.log('form values', values);
  };

  return (
    <div>
      <Title level={4} style={{ marginBottom: 4 }}>
        Forms
      </Title>
      <Text type="secondary">Common form controls built entirely with Ant Design.</Text>

      <Card style={{ marginTop: 24 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ notifications: true, plan: 'pro', capacity: 50 }}
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Project Name"
                name="projectName"
                rules={[{ required: true, message: 'Please enter a project name' }]}
              >
                <Input placeholder="e.g. Customer Portal" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please select a category' }]}
              >
                <Select
                  placeholder="Select a category"
                  options={[
                    { value: 'engineering', label: 'Engineering' },
                    { value: 'design', label: 'Design' },
                    { value: 'marketing', label: 'Marketing' },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Deadline" name="deadline">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Plan" name="plan">
                <Radio.Group
                  options={[
                    { label: 'Starter', value: 'starter' },
                    { label: 'Pro', value: 'pro' },
                    { label: 'Enterprise', value: 'enterprise' },
                  ]}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="Describe the project scope" />
          </Form.Item>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Team Capacity" name="capacity">
                <Slider min={0} max={100} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Email Notifications" name="notifications" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="tags" label="Tags">
            <Checkbox.Group
              options={['Internal', 'Client-facing', 'High Priority', 'Recurring']}
            />
          </Form.Item>

          <Divider />

          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form>
      </Card>
    </div>
  );
};

export default Forms;
