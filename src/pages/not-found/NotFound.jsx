import { Button, Result, Flex, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <Flex align="center" justify="center" style={{ minHeight: '100vh', background: colorBgLayout }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate('/dashboard/home')}>
            Back to Dashboard
          </Button>
        }
      />
    </Flex>
  );
};

export default NotFound;
