import React, { useEffect, useState } from "react";

import { Space, Table, Tag, Select } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useStore } from "zustand";

const notify = () =>
  toast.success("Task successfully updated !", {
    position: "top-center",
  });

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
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
    render: (_, record) => {
      const handleChange = async (value) => {
        const upData = { ...record, status: value };

        try {
          const res = await axios.patch(
            `https://pc-builder-sand.vercel.app/api/v1/assignTask/${record?._id}`,
            upData
          );
          if (res.data.status === "success") {
            notify();
          }
        } catch (err) {}

        console.log(`selected ${value}`, res);
      };
      return (
        <Space size="middle">
          <Select
            defaultValue={record.status}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "To Do", label: "To Do" },
              { value: "In Progress", label: "In Progress" },
              { value: "Done", label: "Done" },
            ]}
          />
        </Space>
      );
    },
  },
];

function Tasks() {
  const [data, setData] = useState([]);

  // const AssignTasks = useStore((state) => state.tasks);
  // const setTaskData = useStore((state) => state.setTasks);
  const fetchData = async () => {
    const res = await axios.get(
      "https://pc-builder-sand.vercel.app/api/v1/assignTask"
    );
    // console.log("res", res);

    setData(res?.data?.data);
    // setTaskData(res?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-lg:overflow-x-scroll">
      <ToastContainer />
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Tasks;
