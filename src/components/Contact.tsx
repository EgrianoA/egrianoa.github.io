import { Typography, Button, Card } from 'antd';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeMode } from '../ThemeProvider';

const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    {
      icon: <MailOutlined style={{ fontSize: '32px' }} />,
      label: t('contact.emailLabel'),
      href: `mailto:${t('contact.email')}`,
      color: '#EA4335',
    },
    {
      icon: <LinkedinOutlined style={{ fontSize: '32px' }} />,
      label: t('contact.linkedinLabel'),
      href: 'https://www.linkedin.com/in/egrianoaristianto/',
      color: '#0A66C2',
    },
    {
      icon: <GithubOutlined style={{ fontSize: '32px' }} />,
      label: t('contact.githubLabel'),
      href: 'https://github.com/EgrianoA',
      color: '#181717',
    },
  ];

  return (
    <div
      id="contact"
      style={{
        padding: '80px 24px',
        background: mode === 'light' ? '#ffffff' : '#0a0a0a',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Title
            level={2}
            style={{
              marginBottom: '24px',
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
            }}
          >
            {t('contact.title')}
          </Title>

          <Paragraph
            style={{
              marginBottom: '48px',
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: mode === 'light' ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)',
            }}
          >
            {t('contact.description')}
          </Paragraph>

          <Card
            style={{
              padding: '40px',
              background: mode === 'light' ? '#fafafa' : '#141414',
              borderRadius: '16px',
              border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
              boxShadow: 'none',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Button
                      type="default"
                      shape="circle"
                      size="large"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={link.icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: mode === 'light' ? '#ffffff' : '#0a0a0a',
                        border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'}`,
                        transition: 'all 0.3s ease',
                      }}
                    />
                    <Text style={{ fontWeight: 500, color: mode === 'light' ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' }}>
                      {link.label}
                    </Text>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Button
                type="primary"
                size="large"
                href={`mailto:${t('contact.email')}`}
                icon={<MailOutlined />}
                style={{
                  padding: '12px 40px',
                  height: 'auto',
                  fontSize: '1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 100%)',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)',
                }}
              >
                {t('contact.email')}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
