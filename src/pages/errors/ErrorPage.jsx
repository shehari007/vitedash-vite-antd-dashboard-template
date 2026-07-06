import { Card, Result, Button, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const ErrorPage = ({ status, title, subTitle }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Title level={4} style={{ marginBottom: 4 }}>
        Error Pages
      </Title>
      <Text type="secondary">{`Example ${title} page built with Ant Design's Result component.`}</Text>

      <Card style={{ marginTop: 24 }}>
        <Result
          status={status}
          title={title}
          subTitle={subTitle}
          extra={
            <Space>
              <Button type="primary" onClick={() => navigate('/dashboard/home')}>
                Back to Dashboard
              </Button>
              <Button onClick={() => navigate(-1)}>Go Back</Button>
            </Space>
          }
        />
      </Card>
    </div>
  );
};

export default ErrorPage;
