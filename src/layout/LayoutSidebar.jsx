import { Layout, Drawer } from 'antd';
import LayoutLogo from './LayoutLogo';
import LayoutMenu from './LayoutMenu';
import LayoutUserCard from './LayoutUserCard';
import { SIDER_BG } from '../context/theme-mode-context';

const { Sider } = Layout;

const LayoutSidebar = ({ collapsed, isMobile, mobileDrawerOpen, onClose }) => {
  const siderContent = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <LayoutLogo collapsed={collapsed && !isMobile} />
      <div style={{ flex: '1 1 auto', overflowY: 'auto', overflowX: 'hidden' }}>
        <LayoutMenu onItemClick={isMobile ? onClose : undefined} />
      </div>
      <LayoutUserCard collapsed={collapsed && !isMobile} />
    </div>
  );

  if (isMobile) {
    return (
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={mobileDrawerOpen}
        width={250}
        styles={{
          body: {
            padding: 0,
            background: SIDER_BG,
          },
        }}
      >
        {siderContent}
      </Drawer>
    );
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'hidden',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
      }}
    >
      {siderContent}
    </Sider>
  );
};

export default LayoutSidebar;
