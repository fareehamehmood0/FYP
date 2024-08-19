import React from 'react';
import { Layout, Card, Col, Row, List, Typography } from 'antd';

const { Title } = Typography;
const { Content, Sider } = Layout;

const getGreetingMessage = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) return 'Good Morning';
  if (currentHour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

const projectManagementInfo = 'Manage your university and FYP projects efficiently.'; // Information for the mentor's project management
const meetings = ['Project Update', 'Student Review']; // Example: upcoming meetings
const events = ['Project Submission Deadline', 'Mentor Meeting']; // Example: upcoming events
const previousDiscussions = [
  { title: 'Discussion 1', description: 'Details of discussion 1', date: '2024-08-18' },
  { title: 'Discussion 2', description: 'Details of discussion 2', date: '2024-08-17' },
  { title: 'Discussion 3', description: 'Details of discussion 3', date: '2024-08-16' },
];

const MentorDashboard = () => {
  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Row gutter={[16, 16]}>
          {/* First Row */}
          <Col span={12}>
            <Card title={getGreetingMessage()}>
              <p>Welcome back! Ready to guide your students.</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="University and FYP Project Management">
              <p>{projectManagementInfo}</p>
            </Card>
          </Col>

          {/* Second Row */}
          <Col span={12}>
            <Card title="Upcoming Meetings">
              <List
                dataSource={meetings}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Upcoming Events">
              <List
                dataSource={events}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Right Sidebar */}
      <Sider width={300} style={{ background: '#fff', marginLeft: '16px' }}>
        <Title level={4} style={{ padding: '16px' }}>Previous Discussions</Title>
        {previousDiscussions.map((discussion, index) => (
          <Card
            key={index}
            style={{ marginBottom: '16px' }}
            title={discussion.title}
            extra={<span>{discussion.date}</span>}
          >
            <p>{discussion.description}</p>
          </Card>
        ))}
      </Sider>
    </Layout>
  );
};

export default MentorDashboard;
