import { useEffect, useMemo, useState } from 'react';
import { App as AntApp, ConfigProvider, theme as antdTheme } from 'antd';
import { FONT_FAMILY, SIDER_BG, SIDER_SUBMENU_BG, ThemeModeContext } from './theme-mode-context';

const STORAGE_KEY = 'dashboard-theme-mode';

const getSystemPreference = () =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getInitialMode = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : getSystemPreference();
};

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      isDark: mode === 'dark',
      setMode,
      toggleMode: () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ConfigProvider
        card={{ variant: 'borderless' }}
        theme={{
          algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: '#1677ff',
            borderRadius: 8,
            fontFamily: FONT_FAMILY,
            boxShadowTertiary: mode === 'dark'
              ? '0 2px 4px 0 rgba(0, 0, 0, 0.28), 0 4px 12px 0 rgba(0, 0, 0, 0.24)'
              : '0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.06)',
          },
          components: {
            Layout: {
              headerPadding: '0 16px',
              siderBg: SIDER_BG,
              triggerBg: SIDER_SUBMENU_BG,
            },
            Menu: {
              darkItemBg: SIDER_BG,
              darkSubMenuItemBg: SIDER_SUBMENU_BG,
              darkItemHoverBg: 'rgba(255, 255, 255, 0.08)',
              darkItemColor: 'rgba(255, 255, 255, 0.85)',
              darkItemSelectedColor: '#ffffff',
              darkGroupTitleColor: 'rgba(255, 255, 255, 0.35)',
            },
            Card: {
              headerFontSize: 16,
            },
          },
        }}
      >
        <AntApp>{children}</AntApp>
      </ConfigProvider>
    </ThemeModeContext.Provider>
  );
};
