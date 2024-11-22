import React, { useState } from "react";
import { Button, Card, Row, Col, Modal, Form, Input, notification } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Sample project data with detailed proposals
const projects = [
  {
    id: 1,
    name: "Communication Era",
    groupMembers: ["Alina", "Bushra", "Charlis"],
    intro: "To explore and analyze the evolution of communication technologies and their impact on society.",
    documentUrl: "https://example.com/project-a-document.pdf",
    proposal: {
      title: "Communication",
      objective:
        "To check",
    },
  },
  {
    id: 2,
    name: "Development",
    groupMembers: ["Daoud", "Elina", "Fareeha"],
    intro: "To study the impact of technological advancements on development processes and outcomes.",
    documentUrl: "https://example.com/project-b-document.pdf",
    proposal: {
      title: "Development Proposal",
      objective:
        "To check.",
    },
  },
  {
    id: 3,
    name: " Cost Management",
    groupMembers: ["Gulzar", "Heider", "Iram"],
    intro: "To develop strategies for effectively planning, controlling, and reducing project or operational costs.",
    documentUrl: "https://example.com/project-c-document.pdf",
    proposal: {
      title: "Cost Mangement Proposal",
      objective:
        "To check.",
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
    <div style={{ padding: "20px", }}>
      <div
        style={{
         // backgroundColor: "#4D96FF",
          paddingTop: "1px",
          paddingBottom: "1px",
          //color: "white",
          textAlign: "left",
          fontSize: "30px",
        }}
      >
        <h2>Student's Meeting Schedule </h2>
      </div>
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
        title={` Details for ${selectedProject?.name}`}
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
          <strong>Objective:</strong> {selectedProject?.proposal.objective}
        </p>

        <p>
          <strong>Document:</strong>
          <a
            href={selectedProject?.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            View Document 
          </a>
        </p>

        <Form style={{ marginTop: "20px" }}>
          <Form.Item label="Feedback">
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
        <Form layout="vertical" requiredMark={false}  >
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
