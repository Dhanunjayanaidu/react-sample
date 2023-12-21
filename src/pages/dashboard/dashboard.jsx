import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  DatabaseOutlined,
  RetweetOutlined,
  TableOutlined,
  DiffOutlined,
  SettingOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

import DataTable from "../../components/DataTable/DataTable";
import "./dashboard.scss";
import Logo from "../../components/Logo/Logo";
import MenuSet from "../../components/Menu/Menu";

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className="dashboard_layout">
        <Sider
          className="sidebar"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          {/* <Logo className={collapsed ? LogoSet : LogoSetCollapsed} /> */}
          <Logo />
          <Menu
            style={{ display: "none" }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <AppstoreAddOutlined />,
                label: "Widgets",
              },
              {
                key: "3",
                icon: <DatabaseOutlined />,
                label: "Components",
              },
              {
                key: "4",
                icon: <RetweetOutlined />,
                label: "Elements",
              },
              {
                key: "5",
                icon: <AreaChartOutlined />,
                label: "Advanced Elements",
              },
              {
                key: "6",
                icon: <PieChartOutlined />,
                label: "Charts",
              },
              {
                key: "7",
                icon: <TableOutlined />,
                label: "Tables",
              },
              {
                key: "8",
                icon: <DiffOutlined />,
                label: "Pages",
              },
              {
                key: "9",
                icon: <SettingOutlined />,
                label: "Custom Pages",
              },
              {
                key: "10",
                icon: <SlidersOutlined />,
                label: "Sub Menus",
              },
            ]}
          />

          <MenuSet />
        </Sider>

        <Layout className="right">
          <Header className="Header">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content className="content_body">
            <DataTable />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
