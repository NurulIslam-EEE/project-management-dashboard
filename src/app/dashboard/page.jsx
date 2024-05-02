"use client";
import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import AddTask from "@/components/AddTask/AddTask";
import Tasks from "@/components/Tasks/Tasks";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  { icon: UserOutlined, title: "Tasks" },
  { icon: VideoCameraOutlined, title: "Add task" },
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon.icon),
  label: icon.title,
}));
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Dashboard = () => {
  const [tab, setTab] = useState(1);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="mt-10"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          onClick={(v) => {
            setTab(Number(v.key));
            // console.log(tab);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* search */}
          <Space direction="vertical">
            <Search
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: "80vh",
            }}
          >
            {tab === 2 && <AddTask />}
            {tab === 1 && <Tasks />}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Programmin Hero
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
