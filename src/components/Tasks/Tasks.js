import React from "react";

import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Deadline",
    dataIndex: "deadline",
    key: "deadline",
  },
  {
    title: "Assigned Members",
    key: "assignedMembers",
    dataIndex: " assignedMembers",
    render: (_, { assignedMembers }) => (
      <>
        {assignedMembers.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <Space size="middle">
        <a> {record.status}</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    title: "John Brown",
    description: 32,
    address: "New York No. 1 Lake Park",
    assignedMembers: ["Rasel", "Rony"],
    deadline: "25.05.2024",
    status: "pending",
  },
  {
    key: "1",
    title: "John Brown",
    description: 32,
    address: "New York No. 1 Lake Park",
    assignedMembers: ["Rasel", "Rony"],
    deadline: "25.05.2024",
    status: "pending",
  },
  {
    key: "1",
    title: "John Brown",
    description: 32,
    address: "New York No. 1 Lake Park",
    assignedMembers: ["Rasel", "Rony"],
    deadline: "25.05.2024",
    status: "pending",
  },
  {
    key: "1",
    title: "John Brown",
    description: 32,
    address: "New York No. 1 Lake Park",
    assignedMembers: ["Rasel", "Rony"],
    deadline: "25.05.2024",
    status: "pending",
  },
];

function Tasks() {
  return (
    <div className="max-lg:overflow-x-scroll">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Tasks;
