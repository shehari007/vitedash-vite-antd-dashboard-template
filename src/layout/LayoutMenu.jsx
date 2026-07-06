import { useState } from 'react';
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
  SafetyOutlined,
  LoginOutlined,
  UserAddOutlined,
  KeyOutlined,
  ExportOutlined,
  CalendarOutlined,
  ProjectOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  LayoutOutlined,
  IdcardOutlined,
  WarningOutlined,
  StopOutlined,
  BugOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const ICON_SIZE = 16;

const icon = (Component, color) => <Component style={{ color, fontSize: ICON_SIZE }} />;

const ExternalLink = ({ to, children }) => (
  <a href={to} target="_blank" rel="noreferrer">
    {children}
    <ExportOutlined style={{ fontSize: 11, marginLeft: 6, opacity: 0.65 }} />
  </a>
);

const rootKeys = ['overview', 'management', 'templates', 'account', 'auth-pages', 'error-pages'];

const items = [
  {
    key: 'overview',
    icon: icon(DashboardOutlined, '#69b1ff'),
    label: 'Overview',
    children: [
      { key: 'home', icon: icon(HomeOutlined, '#69b1ff'), label: <Link to="/dashboard/home">Dashboard</Link> },
      { key: 'analytics', icon: icon(BarChartOutlined, '#69b1ff'), label: <Link to="/dashboard/analytics">Analytics</Link> },
      { key: 'calendar', icon: icon(CalendarOutlined, '#69b1ff'), label: <Link to="/dashboard/calendar">Calendar</Link> },
    ],
  },
  {
    key: 'management',
    icon: icon(AppstoreOutlined, '#95de64'),
    label: 'Management',
    children: [
      { key: 'users', icon: icon(TeamOutlined, '#95de64'), label: <Link to="/dashboard/users">Users</Link> },
      { key: 'tables', icon: icon(TableOutlined, '#95de64'), label: <Link to="/dashboard/tables">Projects</Link> },
      { key: 'kanban', icon: icon(ProjectOutlined, '#95de64'), label: <Link to="/dashboard/kanban">Kanban Board</Link> },
      { key: 'invoices', icon: icon(FileTextOutlined, '#95de64'), label: <Link to="/dashboard/invoices">Invoices</Link> },
    ],
  },
  {
    key: 'templates',
    icon: icon(LayoutOutlined, '#36cfc9'),
    label: 'Templates',
    children: [
      { key: 'forms', icon: icon(FormOutlined, '#36cfc9'), label: <Link to="/dashboard/forms">Forms</Link> },
      { key: 'pricing', icon: icon(CreditCardOutlined, '#36cfc9'), label: <Link to="/dashboard/pricing">Pricing</Link> },
      { key: 'chat', icon: icon(MessageOutlined, '#36cfc9'), label: <Link to="/dashboard/chat">Chat</Link> },
      { key: 'faq', icon: icon(QuestionCircleOutlined, '#36cfc9'), label: <Link to="/dashboard/faq">Help Center</Link> },
      { key: 'blank', icon: icon(FileOutlined, '#36cfc9'), label: <Link to="/dashboard/blank">Blank Page</Link> },
    ],
  },
  {
    key: 'account',
    icon: icon(IdcardOutlined, '#f759ab'),
    label: 'Account',
    children: [
      { key: 'profile', icon: icon(UserOutlined, '#f759ab'), label: <Link to="/dashboard/profile">Profile</Link> },
      { key: 'settings', icon: icon(SettingOutlined, '#f759ab'), label: <Link to="/dashboard/settings">Settings</Link> },
    ],
  },
  {
    key: 'auth-pages',
    icon: icon(SafetyOutlined, '#ffa940'),
    label: 'Auth Pages',
    children: [
      { key: 'signin', icon: icon(LoginOutlined, '#ffa940'), label: <ExternalLink to="/signin">Sign In</ExternalLink> },
      { key: 'signup', icon: icon(UserAddOutlined, '#ffa940'), label: <ExternalLink to="/signup">Sign Up</ExternalLink> },
      {
        key: 'forgot-password',
        icon: icon(KeyOutlined, '#ffa940'),
        label: <ExternalLink to="/forgot-password">Forgot Password</ExternalLink>,
      },
    ],
  },
  {
    key: 'error-pages',
    icon: icon(WarningOutlined, '#ff4d4f'),
    label: 'Error Pages',
    children: [
      { key: '400', icon: icon(ExclamationCircleOutlined, '#faad14'), label: <Link to="/dashboard/errors/400">400 Bad Request</Link> },
      { key: '403', icon: icon(StopOutlined, '#fa8c16'), label: <Link to="/dashboard/errors/403">403 Forbidden</Link> },
      { key: '404', icon: icon(BugOutlined, '#ff4d4f'), label: <Link to="/dashboard/errors/404">404 Not Found</Link> },
      { key: '500', icon: icon(WarningOutlined, '#cf1322'), label: <Link to="/dashboard/errors/500">500 Server Error</Link> },
    ],
  },
];

const findOpenPath = (nodes, targetKey, path = []) => {
  for (const node of nodes) {
    if (node.key === targetKey) return path;
    if (node.children) {
      const found = findOpenPath(node.children, targetKey, [...path, node.key]);
      if (found) return found;
    }
  }
  return null;
};

const LayoutMenu = ({ onItemClick }) => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const selectedMenu = pathParts[pathParts.length - 1];

  const [openKeys, setOpenKeys] = useState(() => findOpenPath(items, selectedMenu) || ['overview']);
  const [trackedMenu, setTrackedMenu] = useState(selectedMenu);

  if (selectedMenu !== trackedMenu) {
    setTrackedMenu(selectedMenu);
    const path = findOpenPath(items, selectedMenu);
    if (path) setOpenKeys(path);
  }

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    if (!rootKeys.includes(latestOpenKey)) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      selectedKeys={[selectedMenu]}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={onItemClick}
      inlineIndent={16}
      style={{ borderRight: 0 }}
    />
  );
};

export default LayoutMenu;
