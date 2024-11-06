import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  message,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Option } = Select;

// Sample mentors list
const mentorsList = ["Dr. Smith", "Prof. Brown", "Ms. Green"];

// ProjectCard component with updated layout
const ProjectCard = ({ project, onEdit }) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
      }}
      cover={
        <img
          alt={project.name}
          src={project.image}
          style={{
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
      }
      actions={[
        <Button type="primary" onClick={() => onEdit(project)}>
          Edit Details
        </Button>,
      ]}
    >
      <Meta
        title={project.name}
        description={
          <div>
            <Row justify="space-between">
              <Col>
                <strong>Status:</strong> {project.status}
              </Col>
              <Col>
                <strong>Members:</strong> {project.membersCount}
              </Col>
            </Row>
            <Row justify="space-between" style={{ marginTop: "5px" }}>
              <Col>
                <strong>Leader:</strong> {project.leader}
              </Col>
              <Col>
                <strong>Mentor:</strong> {project.mentor}
              </Col>
            </Row>
          </div>
        }
      />
    </Card>
  );
};

const FYPProjects = () => {
  const [projects, setProjects] = useState([
    // 15 sample projects
    {
      id: 1,
      name: "Project A",
      status: "In Progress",
      membersCount: 5,
      leader: "Alice",
      mentor: "Dr. Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Project B",
      status: "Completed",
      membersCount: 3,
      leader: "Bob",
      mentor: "Prof. Brown",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Project C",
      status: "Pending",
      membersCount: 4,
      leader: "Charlie",
      mentor: "Ms. Green",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Project D",
      status: "In Progress",
      membersCount: 6,
      leader: "David",
      mentor: "Dr. Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Project E",
      status: "In Progress",
      membersCount: 2,
      leader: "Eve",
      mentor: "Prof. Brown",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Project F",
      status: "Pending",
      membersCount: 5,
      leader: "Frank",
      mentor: "Ms. Green",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Project G",
      status: "Completed",
      membersCount: 4,
      leader: "Grace",
      mentor: "Dr. Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Project H",
      status: "In Progress",
      membersCount: 3,
      leader: "Hank",
      mentor: "Prof. Brown",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Project I",
      status: "Completed",
      membersCount: 6,
      leader: "Ivy",
      mentor: "Ms. Green",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Project J",
      status: "Pending",
      membersCount: 5,
      leader: "John",
      mentor: "Dr. Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Project K",
      status: "In Progress",
      membersCount: 4,
      leader: "Kate",
      mentor: "Dr. Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Project L",
      status: "Completed",
      membersCount: 3,
      leader: "Luke",
      mentor: "Ms. Green",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      name: "Project M",
      status: "Pending",
      membersCount: 5,
      leader: "Mia",
      mentor: "Prof. Brown",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      name: "Project N",
      status: "In Progress",
      membersCount: 2,
      leader: "Nina",
      mentor: "Ms. Green",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      name: "Project O",
      status: "Completed",
      membersCount: 6,
      leader: "Oscar",
      mentor: "Dr. Smith",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const showEditModal = (project) => {
    setEditingProject(project);
    setUploadedImage(project.image); // Initialize with existing image
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    const updatedProject = {
      ...values,
      image: uploadedImage || editingProject.image, // Use uploaded image if available
    };

    setProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === editingProject.id ? { ...proj, ...updatedProject } : proj
      )
    );

    if (values.mentor !== editingProject.mentor) {
      message.success(
        `Mentor updated successfully! ${values.mentor} has been assigned to ${values.name}.`
      );
    }

    setIsModalVisible(false);
    setEditingProject(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProject(null);
  };

  const handleImageUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "30px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        {" "}
        Project{" "}
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project) => (
          <Col span={8} key={project.id}>
            <ProjectCard project={project} onEdit={showEditModal} />
          </Col>
        ))}
      </Row>

      <Modal
        title="Edit Project Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {editingProject && (
          <Form
            layout="vertical"
            initialValues={editingProject}
            onFinish={handleOk}
          >
            <Form.Item name="name" label="Project Name">
              <Input />
            </Form.Item>
            <Form.Item name="status" label="Status">
              <Input />
            </Form.Item>
            <Form.Item name="membersCount" label="Members Count">
              <Input type="number" />
            </Form.Item>
            <Form.Item name="leader" label="Leader">
              <Input />
            </Form.Item>
            <Form.Item name="mentor" label="Mentor">
              <Select>
                {mentorsList.map((mentor) => (
                  <Option key={mentor} value={mentor}>
                    {mentor}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Project Image">
              <Upload
                beforeUpload={() => false}
                onChange={handleImageUpload}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="Project Preview"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "8px",
                  }}
                />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save Changes
            </Button>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default FYPProjects;
