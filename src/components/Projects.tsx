import { Typography, Card, Tag, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeMode } from '../ThemeProvider';

const { Title, Paragraph, Text } = Typography;

const Projects = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    period: string;
    description: string;
    technologies: string[];
    highlights: string[];
  }>;

  return (
    <div
      id="projects"
      style={{
        padding: '80px 24px',
        background: mode === 'light' ? '#fafafa' : '#141414',
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
            {t('projects.title')}
          </Title>

          <Row gutter={[24, 24]}>
            {projects.map((project, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: mode === 'light' ? '#ffffff' : '#0a0a0a',
                      border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '12px',
                      boxShadow: mode === 'light'
                        ? '0 2px 8px rgba(0, 0, 0, 0.05)'
                        : '0 2px 8px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '16px',
                        }}
                      >
                        <Title level={4} style={{ margin: 0, fontWeight: 600, flex: 1 }}>
                          {project.title}
                        </Title>
                      </div>

                      <Text
                        style={{
                          color: '#2196f3',
                          marginBottom: '16px',
                          fontWeight: 500,
                          display: 'block',
                        }}
                      >
                        {project.period}
                      </Text>

                      <Paragraph
                        style={{
                          marginBottom: '16px',
                          lineHeight: 1.7,
                          color: mode === 'light' ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)',
                        }}
                      >
                        {project.description}
                      </Paragraph>

                      <div style={{ marginBottom: '16px' }}>
                        {project.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            style={{
                              marginBottom: '4px',
                              paddingLeft: '16px',
                              fontSize: '0.85rem',
                              position: 'relative',
                              color: mode === 'light' ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)',
                            }}
                          >
                            <span
                              style={{
                                position: 'absolute',
                                left: 0,
                                color: '#2196f3',
                                fontWeight: 'bold',
                              }}
                            >
                              •
                            </span>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                        {project.technologies.map((tech) => (
                          <Tag
                            key={tech}
                            color="blue"
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              padding: '4px 12px',
                              borderRadius: '6px',
                            }}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </div>
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

export default Projects;
