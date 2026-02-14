import { Typography, Card, Timeline } from 'antd';
import { EnvironmentOutlined, ProjectOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeMode } from '../ThemeProvider';

const { Title, Text, Paragraph } = Typography;

const Experience = () => {
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
    company: string;
    location: string;
    role: string;
    period: string;
    description: string;
    highlights: string[];
  }>;

  const timelineItems = jobs.map((job, index) => ({
    color: '#2196f3',
    dot: <ProjectOutlined style={{ fontSize: '16px' }} />,
    children: (
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <Card
          style={{
            background: mode === 'light' ? '#ffffff' : '#141414',
            borderRadius: '12px',
            marginBottom: '24px',
            border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
            boxShadow: mode === 'light'
              ? '0 2px 8px rgba(0, 0, 0, 0.06)'
              : '0 2px 8px rgba(0, 0, 0, 0.3)',
          }}
          bordered={false}
        >
          <div style={{ marginBottom: '16px' }}>
            <Title level={4} style={{ marginBottom: '8px', fontWeight: 600 }}>
              {job.role}
            </Title>
            <Text strong style={{ fontSize: '16px', color: '#2196f3' }}>
              {job.company}
            </Text>
            <div style={{ marginTop: '8px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Text type="secondary">
                <EnvironmentOutlined /> {job.location}
              </Text>
              <Text type="secondary">{job.period}</Text>
            </div>
          </div>

          <Paragraph style={{ marginBottom: '16px' }}>
            {job.description}
          </Paragraph>

          {job.highlights && job.highlights.length > 0 && (
            <div>
              <Text strong style={{ display: 'block', marginBottom: '12px' }}>
                Key Highlights:
              </Text>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {job.highlights.map((highlight, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>
                    <Text>{highlight}</Text>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </motion.div>
    ),
  }));

  return (
    <div
      id="experience"
      style={{
        padding: '80px 24px',
        background: mode === 'light' ? '#fafafa' : '#0f0f0f',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            {t('experience.title')}
          </Title>

          <Timeline
            mode="left"
            items={timelineItems}
            style={{ marginTop: '48px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
