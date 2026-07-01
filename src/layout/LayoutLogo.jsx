import logoIcon from '../assets/logo/logo-icon.png';

const LayoutLogo = ({ collapsed }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        height: 64,
        flexShrink: 0,
        padding: collapsed ? '0' : '0 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        gap: 12,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          padding: 6,
        }}
      >
        <img
          src={logoIcon}
          alt="ViteDash"
          width={26}
          height={26}
          style={{ display: 'block' }}
        />
      </div>
      {!collapsed && (
        <span style={{ fontSize: 18, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <span style={{ fontWeight: 700, color: '#fff' }}>Vite</span>
          <span style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.75)' }}>Dash</span>
        </span>
      )}
    </div>
  );
};

export default LayoutLogo;
