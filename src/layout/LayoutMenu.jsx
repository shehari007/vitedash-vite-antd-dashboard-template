import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  FileOutlined,
  SettingOutlined,
  UserOutlined,
  TableOutlined,
  FormOutlined,
  BarChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const LayoutMenu = ({ onItemClick }) => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const selectedMenu = pathParts[pathParts.length - 1];

  const items = [
    {
      type: 'group',
      label: 'Overview',
      children: [
        {
          key: 'home',
          icon: <HomeOutlined style={{ color: '#69b1ff' }} />,
          label: <Link to="/dashboard/home">Dashboard</Link>,
        },
        {
          key: 'analytics',
          icon: <BarChartOutlined style={{ color: '#69b1ff' }} />,
          label: <Link to="/dashboard/analytics">Analytics</Link>,
        },
      ],
    },
    {
      type: 'group',
      label: 'Management',
      children: [
        {
          key: 'users',
          icon: <TeamOutlined style={{ color: '#95de64' }} />,
          label: <Link to="/dashboard/users">Users</Link>,
        },
        {
          key: 'tables',
          icon: <TableOutlined style={{ color: '#95de64' }} />,
          label: <Link to="/dashboard/tables">Projects</Link>,
        },
      ],
    },
    {
      type: 'group',
      label: 'Pages',
      children: [
        {
          key: 'forms',
          icon: <FormOutlined />,
          label: <Link to="/dashboard/forms">Forms</Link>,
        },
        {
          key: 'profile',
          icon: <UserOutlined />,
          label: <Link to="/dashboard/profile">Profile</Link>,
        },
        {
          key: 'settings',
          icon: <SettingOutlined />,
          label: <Link to="/dashboard/settings">Settings</Link>,
        },
        {
          key: 'blank',
          icon: <FileOutlined />,
          label: <Link to="/dashboard/blank">Blank Page</Link>,
        },
      ],
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      selectedKeys={[selectedMenu]}
      onClick={onItemClick}
      style={{ borderRight: 0 }}
    />
  );
};

export default LayoutMenu;
