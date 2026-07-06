import { Layout, Typography, Space, Button, Tag, Tooltip, theme } from 'antd';
import { GithubOutlined, MailOutlined, ReadOutlined } from '@ant-design/icons';
import logoIcon from '../assets/logo/logo-icon.png';
import { APP_VERSION } from '../config/appInfo';

const { Footer } = Layout;
const { Text } = Typography;

const links = [
  {
    key: 'mail',
    label: 'Email',
    href: 'mailto:shehariyar@gmail.com',
    icon: <MailOutlined />,
    color: '#1677ff',
  },
  {
    key: 'docs',
    label: 'Ant Design Docs',
    href: 'https://ant.design/docs/react/introduce',
    icon: <ReadOutlined />,
    color: '#13c2c2',
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/shehari007',
    icon: <GithubOutlined />,
    color: '#722ed1',
    external: true,
  },
];

const LayoutFooter = () => {
  const {
    token: { colorBorderSecondary },
  } = theme.useToken();

  return (
    <Footer
      style={{
        padding: '14px 24px',
        background: 'transparent',
        borderTop: `1px solid ${colorBorderSecondary}`,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
      }}
    >
      <Space size={8}>
        <img src={logoIcon} alt="ViteDash" width={18} height={18} style={{ display: 'block' }} />
        <Text type="secondary" style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} ViteDash. Built by Muhammad Sheharyar Butt.
        </Text>
        <Tag style={{ fontSize: 11, marginInlineStart: 4 }}>v{APP_VERSION}</Tag>
      </Space>

      <Space size={4}>
        {links.map((link) => (
          <Tooltip key={link.key} title={link.label}>
            <Button
              type="text"
              shape="circle"
              size="small"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              icon={link.icon}
              style={{ color: link.color }}
            />
          </Tooltip>
        ))}
      </Space>
    </Footer>
  );
};

export default LayoutFooter;
