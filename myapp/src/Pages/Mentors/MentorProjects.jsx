import React, { useState } from "react";
import { Button, Card, Row, Col, Modal, Form, Input, notification } from "antd";

// Sample project data with detailed proposals
const projects = [
  {
    id: 1,
    name: "PetPedia",
    groupMembers: ["Alice", "Bob", "Charlie"],
    intro: "A brief introduction to Petpedia.",
    documentUrl: "https://example.com/project-a-document.pdf", // Link to PDF
    proposal: {
      title: "Petpedia Proposal",
      description: "This is a detailed description of Petpedia.",
      objective: "To explore the capabilities of Petpedia in real-world.",
    },
  },
  {
    id: 2,
    name: "Development",
    groupMembers: ["David", "Eve", "Frank"],
    intro: "A brief introduction to Development.",
    documentUrl: "https://example.com/project-b-document.pdf", // Link to PDF
    proposal: {
      title: "Development Proposal",
      description: "This is a detailed description of development project.",
      objective:
        "To analyze the effectiveness of Development Project  in various scenarios.",
    },
  },
  {
    id: 3,
    name: "Cost Management",
    groupMembers: ["Grace", "Heidi", "Ivan"],
    intro: "A brief introduction to Cost Management .",
    documentUrl: "https://example.com/project-c-document.pdf", // Link to PDF
    proposal: {
      title: "Project C Proposal",
      description: "This is a detailed description of Cost Management.",
      objective:
        "To evaluate the outcomes of Cost Management in specific conditions .",
    },
  },
];

const ProjectReviewPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    // Logic to handle feedback submission
    notification.success({
      message: "Feedback Submitted",
      description: `Your feedback for the document related to "${selectedProject?.name}" has been submitted. The student will be notified.`,
    });
    setFeedback("");
    handleCancel();
  };

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          //backgroundColor: "#4D96FF",
          paddingTop: "1px",
          paddingBottom: "1px",
         // color: "white",
          textAlign:"left",
          fontSize:"30px",
        }}
      >
        <h2>Student Projects</h2>
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

        <Form style={{ marginTop: "20px", fontWeight:"bold" }}>
          <Form.Item label="Feedback ">
            <Input.TextArea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              placeholder="Provide feedback on the document..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectReviewPage;
