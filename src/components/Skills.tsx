import { Typography, Card, Tag, Row, Col } from 'antd';
import {
  CodeOutlined,
  DatabaseOutlined,
  ToolOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeMode } from '../ThemeProvider';

const { Title } = Typography;

const Skills = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = t('skills.categories', { returnObjects: true }) as Record<
    string,
    { title: string; items: string[] }
  >;

  const iconMap: Record<string, React.ReactElement> = {
    frontend: <DesktopOutlined style={{ fontSize: '32px' }} />,
    backend: <CodeOutlined style={{ fontSize: '32px' }} />,
    database: <DatabaseOutlined style={{ fontSize: '32px' }} />,
    tools: <ToolOutlined style={{ fontSize: '32px' }} />,
  };

  return (
    <div
      id="skills"
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
              marginBottom: '64px',
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
            }}
          >
            {t('skills.title')}
          </Title>

          <Row gutter={[24, 24]}>
            {Object.entries(categories).map(([key, category], index) => (
              <Col xs={24} sm={12} md={12} key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    style={{
                      height: '100%',
                      background: mode === 'light' ? '#fafafa' : '#141414',
                      border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '12px',
                      boxShadow: mode === 'light'
                        ? '0 2px 8px rgba(0, 0, 0, 0.05)'
                        : '0 2px 8px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '24px',
                        color: '#2196f3',
                      }}
                    >
                      {iconMap[key]}
                      <Title level={4} style={{ marginLeft: '16px', marginBottom: 0, fontWeight: 600 }}>
                        {category.title}
                      </Title>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      {category.items.map((item) => (
                        <Tag
                          key={item}
                          color={mode === 'light' ? 'default' : 'blue'}
                          style={{
                            padding: '6px 16px',
                            fontSize: '14px',
                            fontWeight: 500,
                            borderRadius: '6px',
                            border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'}`,
                          }}
                        >
                          {item}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
