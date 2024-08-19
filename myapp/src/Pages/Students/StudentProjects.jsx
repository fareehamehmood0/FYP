import React, { useState } from 'react';
import { Card, Button, Upload, Form, Input, List } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const StudentProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'Project Alpha',
            leader: 'John Doe',
            members: ['Alice', 'Bob', 'Charlie'],
            details: 'This is a description of Project Alpha.',
            files: [],
            feedback: [],
        },
        // Add more projects here
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleFileUpload = (file) => {
        // Handle file upload logic here
    };

    const handleSubmitFeedback = (values) => {
        // Handle feedback submission logic here
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px auto',
            maxWidth: '1200px',
            padding: '0 20px',
        }}>
            {projects.map((project) => (
                <Card
                    key={project.id}
                    title={project.name}
                    extra={<Button onClick={() => handleProjectClick(project)}>View Details</Button>}
                    style={{
                        width: '100%',
                        marginBottom: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    hoverable
                    bodyStyle={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '16px',
                    }}
                >
                    <p style={{ margin: '0 0 8px' }}><strong>Leader:</strong> {project.leader}</p>
                    <p style={{ margin: '0 0 8px' }}><strong>Members:</strong> {project.members.join(', ')}</p>
                    <p style={{ margin: '0' }}>{project.details}</p>
                </Card>
            ))}

            {selectedProject && (
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                }}>
                    <Card style={{
                        width: '100%',
                        maxWidth: '800px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        textAlign: 'left',
                    }}>
                        <h2 style={{
                            textAlign: 'center',
                            fontSize: '24px',
                            marginBottom: '20px',
                            color: '#333',
                        }}>{selectedProject.name} - Detailed Information</h2>
                        <p style={{ margin: '0 0 10px' }}><strong>Leader:</strong> {selectedProject.leader}</p>
                        <p style={{ margin: '0 0 10px' }}><strong>Members:</strong> {selectedProject.members.join(', ')}</p>
                        <p style={{ margin: '0 0 20px' }}>{selectedProject.details}</p>

                        <Form onFinish={handleFileUpload} style={{ marginBottom: '20px' }}>
                            <Form.Item name="upload" label="Upload Files">
                                <Upload multiple>
                                    <Button icon={<UploadOutlined />}>Select Files</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>Submit</Button>
                            </Form.Item>
                        </Form>

                        <h3 style={{ marginBottom: '10px' }}>Mentor Feedback</h3>
                        <List
                            dataSource={selectedProject.feedback}
                            renderItem={(feedback) => (
                                <List.Item>{feedback}</List.Item>
                            )}
                            style={{ marginBottom: '20px' }}
                        />

                        <Form onFinish={handleSubmitFeedback}>
                            <Form.Item name="feedback" label="Your Feedback">
                                <Input.TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>Submit Feedback</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default StudentProjectPage;
