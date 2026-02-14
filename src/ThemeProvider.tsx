import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Detect system theme preference
  const getInitialMode = (): ThemeMode => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null;
    if (savedMode) {
      return savedMode;
    }
    // Otherwise, use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  const toggleTheme = () => {
    setMode((prevMode: ThemeMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      // Save preference to localStorage
      localStorage.setItem('theme-mode', newMode);
      return newMode;
    });
  };

  // Update body background color when theme changes
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#ffffff' : '#0a0a0a';
    document.body.style.color = mode === 'light' ? '#1a1a1a' : '#ffffff';
  }, [mode]);

  const themeConfig = useMemo(
    () => ({
      algorithm: mode === 'light' ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
      token: {
        colorPrimary: '#2196f3',
        colorInfo: '#42a5f5',
        borderRadius: 12,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
        fontSize: 16,
        colorBgBase: mode === 'light' ? '#ffffff' : '#0a0a0a',
        colorTextBase: mode === 'light' ? '#1a1a1a' : '#ffffff',
        colorBorder: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
      },
      components: {
        Button: {
          controlHeight: 40,
          fontWeight: 600,
        },
        Card: {
          borderRadiusLG: 12,
          boxShadowTertiary: mode === 'light' 
            ? '0 4px 20px rgba(0, 0, 0, 0.08)'
            : '0 4px 20px rgba(0, 0, 0, 0.4)',
        },
        Layout: {
          headerBg: 'transparent',
        },
        Typography: {
          fontWeightStrong: 600,
        },
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ConfigProvider theme={themeConfig}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
