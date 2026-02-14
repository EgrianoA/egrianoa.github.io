import { Typography, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeMode } from '../ThemeProvider';

const { Title, Text, Paragraph } = Typography;

const Hero = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate years of experience since November 2019
  const startDate = new Date(2019, 10); // November 2019 (month is 0-indexed)
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const yearsOfExperience = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const navbarHeight = 80;
      const additionalOffset = 0;
      const totalOffset = navbarHeight + additionalOffset;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollDown = () => {
    const element = document.querySelector('#about');
    if (element) {
      const navbarHeight = 80;
      const additionalOffset = 0;
      const totalOffset = navbarHeight + additionalOffset;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: mode === 'light'
          ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          : 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        padding: '0px 24px 80px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div style={{ textAlign: 'center' }}>
            <Text
              style={{
                display: 'block',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 600,
                color: '#2196f3',
                marginBottom: '8px',
              }}
            >
              {t('hero.greeting')}
            </Text>

            <Title
              level={1}
              style={{
                marginTop: 0,
                marginBottom: '16px',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {t('hero.name')}
            </Title>

            <Title
              level={2}
              style={{
                marginBottom: '24px',
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                fontWeight: 600,
              }}
            >
              {t('hero.title')}
            </Title>

            <Paragraph
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                maxWidth: '700px',
                margin: '0 auto 48px',
                opacity: 0.8,
              }}
            >
              {t('hero.subtitle', { years: yearsOfExperience })}
            </Paragraph>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                type="primary"
                size="large"
                onClick={handleContactClick}
                style={{
                  height: '56px',
                  padding: '0 40px',
                  fontSize: '18px',
                  fontWeight: 600,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 100%)',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)',
                }}
              >
                {t('hero.cta')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <Text
          type="secondary"
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
          }}
        >
          {t('hero.scrollDown')}
        </Text>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Button
            type="text"
            shape="circle"
            icon={<ArrowDownOutlined />}
            onClick={handleScrollDown}
            size="large"
            style={{
              fontSize: '20px',
              color: '#2196f3',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
