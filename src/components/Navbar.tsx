import { useState } from 'react';
import { Layout, Button, Dropdown, Drawer, Space, Grid } from 'antd';
import type { MenuProps } from 'antd';
import {
  MenuOutlined,
  CloseOutlined,
  SunOutlined,
  MoonOutlined,
  GlobalOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useThemeMode } from '../ThemeProvider';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { mode, toggleTheme } = useThemeMode();
  const screens = useBreakpoint();

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Height of our fixed navbar
      const additionalOffset = 0; // Minimal extra space
      const totalOffset = navbarHeight + additionalOffset;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMobileOpen(false);
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleThemeChange = (newMode: 'light' | 'dark') => {
    if (mode !== newMode) {
      toggleTheme();
    }
  };

  // Generic function to create menu items with icon, label, and check mark
  const createMenuItems = (
    items: Array<{
      key: string;
      icon: React.ReactNode;
      label: string;
      isActive: boolean;
      onClick: () => void;
    }>
  ): MenuProps['items'] => {
    return items.map((item) => ({
      key: item.key,
      label: (
        <Space>
          {item.icon}
          <span>{item.label}</span>
          {item.isActive && <CheckOutlined style={{ color: '#2196f3' }} />}
        </Space>
      ),
      onClick: item.onClick,
    }));
  };

  const languageMenuItems = createMenuItems([
    {
      key: 'en',
      icon: <span style={{ fontSize: '1.2rem' }}>🇬🇧</span>,
      label: t('language.english'),
      isActive: i18n.language === 'en',
      onClick: () => handleLanguageChange('en'),
    },
    {
      key: 'id',
      icon: <span style={{ fontSize: '1.2rem' }}>🇮🇩</span>,
      label: t('language.indonesian'),
      isActive: i18n.language === 'id',
      onClick: () => handleLanguageChange('id'),
    },
  ]);

  const themeMenuItems = createMenuItems([
    {
      key: 'light',
      icon: <SunOutlined />,
      label: t('theme.light'),
      isActive: mode === 'light',
      onClick: () => handleThemeChange('light'),
    },
    {
      key: 'dark',
      icon: <MoonOutlined />,
      label: t('theme.dark'),
      isActive: mode === 'dark',
      onClick: () => handleThemeChange('dark'),
    },
  ]);

  return (
    <>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '80px',
          lineHeight: '80px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          backdropFilter: 'blur(10px)',
          backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(10, 10, 10, 0.9)',
          borderBottom: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div
            onClick={() => handleScroll('#home')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/assets/logo.png"
              alt="Egriano Aristianto"
              style={{
                height: '50px',
                width: 'auto',
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: screens.md ? 'flex' : 'none',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                type="text"
                onClick={() => handleScroll(item.href)}
                style={{
                  color: mode === 'light' ? '#000' : '#fff',
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Language, Theme, and Mobile Menu */}
          <Space size="small">
            <Dropdown
              menu={{ items: languageMenuItems }}
              trigger={['hover']}
              placement="bottomRight"
            >
              <Button
                type="text"
                icon={<GlobalOutlined style={{ fontSize: '20px' }} />}
                style={{
                  color: mode === 'light' ? '#000' : '#fff',
                }}
              />
            </Dropdown>

            <Dropdown
              menu={{ items: themeMenuItems }}
              trigger={['hover']}
              placement="bottomRight"
            >
              <Button
                type="text"
                icon={mode === 'light' ? <SunOutlined style={{ fontSize: '20px' }} /> : <MoonOutlined style={{ fontSize: '20px' }} />}
                style={{
                  color: mode === 'light' ? '#000' : '#fff',
                }}
              />
            </Dropdown>

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: '20px' }} />}
              onClick={() => setMobileOpen(true)}
              style={{
                display: screens.md ? 'none' : 'inline-flex',
                color: mode === 'light' ? '#000' : '#fff',
              }}
            />
          </Space>
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>{t('menu.title')}</span>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setMobileOpen(false)}
            />
          </div>
        }
        placement="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        width={250}
        closable={false}
        styles={{
          body: { padding: 0 }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item, index) => (
            <Button
              key={item.label}
              type="text"
              onClick={() => handleScroll(item.href)}
              style={{
                textAlign: 'left',
                height: '48px',
                padding: '0 24px',
                borderRadius: 0,
                fontSize: '16px',
                fontWeight: 500,
                color: mode === 'light' ? '#000' : '#fff',
                borderBottom: index < navItems.length - 1 ? `1px solid ${mode === 'light' ? '#f0f0f0' : '#303030'}` : 'none',
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Drawer>

      {/* Spacer for fixed header */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default Navbar;
