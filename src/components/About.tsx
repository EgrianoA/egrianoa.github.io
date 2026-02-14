import { Typography, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeMode } from '../ThemeProvider';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      id="about"
      style={{
        padding: '80px 24px',
        background: mode === 'light' ? '#ffffff' : '#0a0a0a',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Title
            level={2}
            style={{
              marginBottom: '48px',
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
            }}
          >
            {t('about.title')}
          </Title>

          <Card
            style={{
              background: mode === 'light' ? '#fafafa' : '#141414',
              borderRadius: '16px',
              border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
              boxShadow: mode === 'light' 
                ? '0 4px 20px rgba(0, 0, 0, 0.05)' 
                : '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
            bordered={false}
          >
            <Paragraph
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: 1.8,
                textAlign: 'justify',
                margin: 0,
              }}
            >
              {t('about.description')}
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
