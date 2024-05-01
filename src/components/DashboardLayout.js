"use client";
import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Sider, Content } = Layout;

const DashboardLayout = ({ children, sidebarMenuItems }) => {
  const [collapsed, setCollapsed] = useState(() => {
    // CHECK THIS CONDITION FOR HANDLING SSR
    if (typeof window !== "undefined") {
      // CHECK FOR WINDOW AVAILABILITY
      const cachedCollapsed = window.localStorage.getItem("collapsed");

      return cachedCollapsed === "true" || false;
    }
    return false;
  });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        className="min-h-screen"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="py-3 px-4">
          <Link href="/auth/login">
            <Button type="primary" block className="text-start" danger>
              Logout
            </Button>
          </Link>
          <hr className="mt-4 border-gray-500" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarMenuItems}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
