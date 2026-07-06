import { useState } from 'react';
import { Layout, theme, Grid } from 'antd';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const getContentPadding = (screens) => {
  if (screens.xl) return '32px 40px';
  if (screens.md) return '24px 32px';
  if (screens.sm) return '20px 24px';
  return '16px';
};

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const siderCollapsed = isMobile || collapsed;

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileDrawerOpen((open) => !open);
    } else {
      setCollapsed((value) => !value);
    }
  };

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSidebar
        collapsed={siderCollapsed}
        isMobile={isMobile}
        mobileDrawerOpen={mobileDrawerOpen}
        onClose={closeMobileDrawer}
      />
      <Layout
        style={{
          marginLeft: isMobile ? 0 : collapsed ? 80 : 200,
          transition: 'margin-left 0.2s',
          height: '100vh',
          overflow: 'auto',
          background: colorBgLayout,
        }}
      >
        <LayoutHeader
          collapsed={siderCollapsed}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
        <Content
          style={{
            padding: getContentPadding(screens),
            flex: '1 0 auto',
            width: '100%',
            maxWidth: 1800,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ flex: '1 1 auto', minHeight: 0 }}>{children}</div>
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
