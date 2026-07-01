import { useNavigate } from 'react-router-dom';
import { Avatar, Space, Tooltip, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import handleLogOut from '../Utils/Auth/Logout';

const { Text } = Typography;

const LayoutUserCard = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: collapsed ? '12px 0' : '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        gap: 8,
      }}
    >
      <Space
        size={8}
        style={{ cursor: 'pointer', minWidth: 0 }}
        onClick={() => navigate('/dashboard/profile')}
      >
        <Avatar size={32} style={{ backgroundColor: '#1677ff', flexShrink: 0 }} icon={<UserOutlined />} />
        {!collapsed && (
          <Space direction="vertical" size={0} style={{ minWidth: 0 }}>
            <Text
              style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: 13, lineHeight: 1.3 }}
              ellipsis
            >
              Admin User
            </Text>
            <Text style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: 12, lineHeight: 1.3 }}>
              Administrator
            </Text>
          </Space>
        )}
      </Space>
      {!collapsed && (
        <Tooltip title="Logout">
          <LogoutOutlined
            style={{ color: 'rgba(255, 255, 255, 0.45)', cursor: 'pointer' }}
            onClick={() => handleLogOut()}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default LayoutUserCard;
