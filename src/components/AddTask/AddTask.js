import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Alert,
  DatePicker,
  Space,
  Select,
} from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const notify = () =>
    toast.success("Task successfully added !", {
      position: "top-center",
    });
  const [dateValue, setDateValue] = useState(null);
  const [data, setData] = useState({
    deadline: "",
  });
  const send = async (data) => {
    console.log("send");
    try {
      const rawResponse = await fetch(
        "https://pc-builder-sand.vercel.app/api/v1/assignTask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const content = await rawResponse.json();
      if (content?.status === "success") {
        setVisible(true);
        notify();
        form.resetFields();
      }
      // console.log("cccc", content);
    } catch (err) {
      console.log("eeee", err);
    }
  };
  const onFinish = async (values) => {
    const taskData = {
      ...data,
      ...values,
    };
    send(taskData);

    // console.log("Success:", { ...data, ...values });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (date, dateString) => {
    setDateValue(dateString);
    setData({ ...data, deadline: dateString });
    console.log("ddds", dateString);
  };

  // select
  const options = [
    {
      label: "Rasel",
      value: "Rasel",
    },
    {
      label: "Rahim",
      value: "Rahim",
    },
    {
      label: "Forhad",
      value: "Forhad",
    },
    {
      label: "Kalam",
      value: "Kalam",
    },
    {
      label: "Bablu",
      value: "Bablu",
    },
  ];

  const handleChange = (value) => {
    setData({ ...data, assignedMembers: value });
    // console.log(data, "valll");
  };
  return (
    <div className="max-lg:overflow-x-scroll">
      <ToastContainer />

      <Form
        name="basic"
        layout="vertical"
        style={{
          maxWidth: 800,
          minWidth: 300,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Details"
          name="details"
          rules={[
            {
              required: true,
              message: "Please input desc details!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p className="mt-1">Deadlines</p>
        <Space
          style={{
            width: "100%",
          }}
          direction="vertical"
          className="my-4"
        >
          <DatePicker
            style={{
              width: "100%",
            }}
            onChange={onChange}
          />
        </Space>
        {/* select */}

        {/* <p className="my-4">Select Members</p> */}
        <Form.Item
          style={{
            width: "100%",
          }}
          label="Assign Members"
          name="assignedMembers"
          direction="vertical"
          rules={[
            {
              required: true,
              message: "Please input title!",
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            onChange={handleChange}
            options={options}
          />
        </Form.Item>
        <Form.Item>
          <Button className="mt-5" type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddTask;
