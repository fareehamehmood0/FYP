import React, { useState } from "react";
import { Button, Card, Row, Col, Modal, Form, Input, notification } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Sample project data with detailed proposals
const projects = [
  {
    id: 1,
    name: "Project A",
    groupMembers: ["Alice", "Bob", "Charlie"],
    intro: "A brief introduction to Project A.",
    documentUrl: "https://example.com/project-a-document.pdf",
    proposal: {
      title: "Project A Proposal",
      description: "This is a detailed description of Project A.",
      objective: "To explore the capabilities of Project A in real-world applications.",
    },
  },
  {
    id: 2,
    name: "Project B",
    groupMembers: ["David", "Eve", "Frank"],
    intro: "A brief introduction to Project B.",
    documentUrl: "https://example.com/project-b-document.pdf",
    proposal: {
      title: "Project B Proposal",
      description: "This is a detailed description of Project B.",
      objective: "To analyze the effectiveness of Project B in various scenarios.",
    },
  },
  {
    id: 3,
    name: "Project C",
    groupMembers: ["Grace", "Heidi", "Ivan"],
    intro: "A brief introduction to Project C.",
    documentUrl: "https://example.com/project-c-document.pdf",
    proposal: {
      title: "Project C Proposal",
      description: "This is a detailed description of Project C.",
      objective: "To evaluate the outcomes of Project C in specific conditions.",
    },
  },
];

const ProjectReviewPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMeetingModalVisible, setIsMeetingModalVisible] = useState(false);
  const [meetingDate, setMeetingDate] = useState(null);

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
    setFeedback(""); // Reset feedback when opening modal
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  const handleFeedbackSubmit = () => {
    notification.success({
      message: "Feedback Submitted",
      description: `Your feedback for the document related to "${selectedProject?.name}" has been submitted. The student will be notified.`,
    });
    setFeedback("");
    handleCancel();
  };

  const handleScheduleMeeting = (project) => {
    setSelectedProject(project);
    setIsMeetingModalVisible(true);
  };

  const handleMeetingSubmit = () => {
    const date = meetingDate ? meetingDate.toLocaleString() : "not specified";
    notification.success({
      message: "Meeting Scheduled",
      description: `A meeting has been scheduled with the group members of "${selectedProject?.name}" on ${date}. The student has been notified.`,
    });
    setMeetingDate(null);
    setIsMeetingModalVisible(false);
    handleCancel();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Projects</h2>
      <Row gutter={16}>
        {projects.map((project) => (
          <Col span={8} key={project.id}>
            <Card title={project.name}>
              <p>
                <strong>Group Members:</strong>{" "}
                {project.groupMembers.join(", ")}
              </p>
              <p>{project.intro}</p>
              <Button type="primary" onClick={() => showModal(project)}>
                View Details
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                onClick={() => handleScheduleMeeting(project)}
              >
                Schedule Meeting
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={`Document Details for ${selectedProject?.name}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleFeedbackSubmit}>
            Submit Feedback
          </Button>,
        ]}
      >
        <h3>Project Details</h3>
        <p>
          <strong>Title:</strong> {selectedProject?.proposal.title}
        </p>
        <p>
          <strong>Description:</strong> {selectedProject?.proposal.description}
        </p>
        <p>
          <strong>Objective:</strong> {selectedProject?.proposal.objective}
        </p>

        <h3>Submitted Document</h3>
        <p>
          <strong>Document:</strong>
          <a
            href={selectedProject?.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            View Document PDF
          </a>
        </p>

        <Form style={{ marginTop: "20px" }}>
          <Form.Item label="Feedback on Document">
            <Input.TextArea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              placeholder="Provide feedback on the document..."
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`Schedule Meeting for ${selectedProject?.name}`}
        visible={isMeetingModalVisible}
        onCancel={() => setIsMeetingModalVisible(false)}
        footer={[
          <Button key="submit" type="primary" onClick={handleMeetingSubmit}>
            Schedule Meeting
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Select Date and Time" required>
            <DatePicker
              selected={meetingDate}
              onChange={(date) => setMeetingDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="Pp"
              placeholderText="Select date and time"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item label="Meeting Purpose (Optional)">
            <Input.TextArea
              placeholder="Describe the purpose of the meeting..."
              rows={3}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectReviewPage;
