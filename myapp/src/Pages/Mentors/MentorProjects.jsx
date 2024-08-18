import React, { useState } from 'react';
import { Card, Button, Progress, Typography, List, Input, Form } from 'antd';
import { CommentOutlined, FileTextOutlined, FileDoneOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [comments, setComments] = useState([]);

  const projects = [
    {
      id: '1',
      name: 'Project A',
      leader: 'Leader A',
      members: ['Member A1', 'Member A2'],
      progress: 70,
      image: 'https://via.placeholder.com/150',
      proposal: 'https://example.com/proposalA.pdf',
      documentation: 'https://example.com/documentationA.pdf',
      comments: ['Initial comment on Project A'],
    },
    {
      id: '2',
      name: 'Project B',
      leader: 'Leader B',
      members: ['Member B1', 'Member B2'],
      progress: 50,
      image: 'https://via.placeholder.com/150',
      proposal: 'https://example.com/proposalB.pdf',
      documentation: 'https://example.com/documentationB.pdf',
      comments: [],
    },
    {
      id: '3',
      name: 'Project C',
      leader: 'Leader C',
      members: ['Member C1', 'Member C2'],
      progress: 50,
      image: 'https://via.placeholder.com/150',
      proposal: 'https://example.com/proposalB.pdf',
      documentation: 'https://example.com/documentationB.pdf',
      comments: [],
    },
    // Add more projects as needed
  ];

  const showProjectDetails = (project) => {
    setSelectedProject(project);
    setComments(project.comments || []);
  };

  const handleAddComment = (values) => {
    setComments([...comments, values.comment]);
    // Typically, you would save the comment to a server here
  };

  return (
    <div style={{ padding: 20 }}>
      <Title level={3} style={{ marginBottom: 20 }}>Mentor's Projects</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <Card
            key={project.id}
            style={{ width: 300, margin: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            cover={<img alt={project.name} src={project.image} />}
            actions={[
              <Button onClick={() => showProjectDetails(project)}>
                View Details
              </Button>,
            ]}
          >
            <Card.Meta title={project.name} description={`Leader: ${project.leader}`} />
            <Progress percent={project.progress} style={{ marginTop: 10 }} />
          </Card>
        ))}
      </div>

      {selectedProject && (
        <div style={{ 
          marginTop: 30, 
          padding: 20, 
          border: '1px solid #f0f0f0', 
          borderRadius: 10, 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          backgroundColor: '#fafafa' 
        }}>
          <Title level={4} style={{ color: '#1f1f1f', marginBottom: 20 }}>Project Details</Title>
          <Paragraph><strong>Leader:</strong> {selectedProject.leader}</Paragraph>
          <Paragraph><strong>Members:</strong> {selectedProject.members.join(', ')}</Paragraph>
          <Paragraph><strong>Progress:</strong> {selectedProject.progress}%</Paragraph>

          <div style={{ marginTop: 20 }}>
            <Title level={5} style={{ marginBottom: 10 }}>Proposal</Title>
            <a href={selectedProject.proposal} target="_blank" rel="noopener noreferrer">
              <Button icon={<FileTextOutlined />} type="primary" style={{ marginRight: 10 }}>
                View Proposal
              </Button>
            </a>
          </div>

          <div style={{ marginTop: 20 }}>
            <Title level={5} style={{ marginBottom: 10 }}>Documentation</Title>
            <a href={selectedProject.documentation} target="_blank" rel="noopener noreferrer">
              <Button icon={<FileDoneOutlined />} type="primary" style={{ marginRight: 10 }}>
                View Documentation
              </Button>
            </a>
          </div>

          <div style={{ marginTop: 30 }}>
            <Title level={5} style={{ marginBottom: 20 }}>Comments</Title>
            <List
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<CommentOutlined style={{ color: '#1890ff' }} />}
                    description={item}
                  />
                </List.Item>
              )}
            />

            <Form onFinish={handleAddComment} style={{ marginTop: 20 }}>
              <Form.Item name="comment">
                <TextArea rows={4} placeholder="Add your comment here" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Add Comment</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
