import React, { useState } from "react";
import { Layout, Table, Tag, Button, Modal, Select, message } from "antd";

const { Header, Content } = Layout;
const { Option } = Select;

const AdminReportsPage = () => {
  const [reports, setReports] = useState([
    {
      id: "1",
      title: "No response yet",
      description: "I have not received any suggestion about my faults yet.",
      severity: "High",
      status: "Pending",
      date: "2023-11-01",
    },
    {
      id: "2",
      title: "Feedback access issue",
      description: "I cannot access the Feedbacks on yourside.",
      severity: "Medium",
      status: "In Progress",
      date: "2023-11-02",
    },
    // Additional sample reports as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Show report details in a modal
  const showModal = (report) => {
    setSelectedReport(report);
    setIsModalVisible(true);
  };

  // Hide modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedReport(null);
  };

  // Update status function
  const handleStatusChange = (status) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === selectedReport.id ? { ...report, status } : report
      )
    );
    message.success("Report status updated successfully");
    setIsModalVisible(false);
  };

  // Define table columns
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
      render: (severity) => {
        const color = severity === "High" ? "red" : "orange";
        return <Tag color={color}>{severity}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "Pending"
            ? "volcano"
            : status === "In Progress"
            ? "blue"
            : "green";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Date Submitted",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          backgroundColor: "#001529",
        }}
      >
        <h2>Issues</h2>
      </Header>
      <Content style={{ padding: "20px 40px" }}>
        <Table
          dataSource={reports}
          columns={columns}
          rowKey="id"
          pagination={false} // Disabling pagination
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "20px",
          }}
        />

        {/* Report Details Modal */}
        {selectedReport && (
          <Modal
            title="Report Details"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <Button type="primary" key="close" onClick={handleCancel}>
                Close
              </Button>,
              <Select
                key="status"
                defaultValue={selectedReport.status}
                style={{ width: 140, marginRight: "8px" }}
                onChange={(value) => handleStatusChange(value)}
              >
                <Option value="Pending">Pending</Option>
                <Option value="In Progress">In Progress</Option>
                <Option value="Resolved">Resolved</Option>
              </Select>,
            ]}
          >
            <p>
              <strong>Title:</strong> {selectedReport.title}
            </p>
            <p>
              <strong>Description:</strong> {selectedReport.description}
            </p>
            <p>
              <strong>Severity:</strong> {selectedReport.severity}
            </p>
            <p>
              <strong>Status:</strong> {selectedReport.status}
            </p>
            <p>
              <strong>Date Submitted:</strong> {selectedReport.date}
            </p>
          </Modal>
        )}
      </Content>
    </Layout>
  );
};

export default AdminReportsPage;
