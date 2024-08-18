import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Carousel } from 'antd';
import {
  MessageOutlined,
  BulbOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

// Data for random messages and custom facts
const randomMessages = [
  "Remember to review the students' projects!",
  "Keep up the great work mentoring!",
  "Check your schedule for upcoming meetings.",
  "Stay motivated, you're doing an amazing job!",
];

const customFacts = [
  "Did you know? Mentoring can increase your own knowledge.",
  "Fact: 70% of students perform better when mentored.",
  "A mentor is someone who allows you to see the hope inside yourself.",
  "Mentors are the key to unlocking a student’s potential.",
];

const upcomingData = [
  {
    title: 'Upcoming Meetings',
    count: 5,
    icon: <CalendarOutlined />,
    description: 'Meetings scheduled in the near future.',
  },
  {
    title: 'Events Within One Week',
    count: 3,
    icon: <ClockCircleOutlined />,
    description: 'Events happening in the upcoming week.',
  },
];

const previousDiscussions = [
  {
    title: "Discussion 1",
    description: "Details of discussion 1",
    date: "2024-08-01",
  },
  {
    title: "Discussion 2",
    description: "Details of discussion 2",
    date: "2024-08-02",
  },
  {
    title: "Discussion 3",
    description: "Details of discussion 3",
    date: "2024-08-03",
  },
];

const CardGrid = () => {
  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    // Set a random message on component mount
    setRandomMessage(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
  }, []);

  return (
    <Row gutter={12} style={{ padding: '20px' }}>
      {/* Main Content Column */}
      <Col span={16}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Card hoverable className="card" style={{ height: '100%', minHeight: '150px' }}>
              <div className="card-content">
                <div className="card-icon"><MessageOutlined /></div>
                <Meta
                  title="Random Message"
                  description={randomMessage}
                />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card hoverable className="card" style={{ height: '100%', minHeight: '150px' }}>
              <div className="card-content">
                <div className="card-icon"><BulbOutlined /></div>
                <Meta
                  title="Custom Facts"
                  description={
                    <Carousel autoplay dots={false} style={{ minHeight: '60px', textAlign: 'center' }}>
                      {customFacts.map((fact, index) => (
                        <div key={index} style={{ padding: '10px', textAlign: 'center' }}>
                          <p style={{ margin: 0 }}>{fact}</p>
                        </div>
                      ))}
                    </Carousel>
                  }
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[8, 8]} style={{ marginTop: '16px' }}>
          {upcomingData.map((data, index) => (
            <Col span={12} key={index}>
              <Card hoverable className="card" style={{ height: '100%', minHeight: '150px' }}>
                <div className="card-content">
                  <div className="card-icon">{data.icon}</div>
                  <Meta
                    title={data.title}
                    description={data.description}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>

      {/* Previous Discussions Column */}
      <Col span={6}>
        <Card title="Previous Discussions" bordered={false}>
          {previousDiscussions.map((discussion, index) => (
            <Card
              type="inner"
              title={discussion.title}
              extra={<span>{discussion.date}</span>}
              style={{ marginBottom: '16px' }}
              key={index}
            >
              <p>{discussion.description}</p>
            </Card>
          ))}
        </Card>
      </Col>
    </Row>
  );
};

export default CardGrid;
