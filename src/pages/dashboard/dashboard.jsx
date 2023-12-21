import React, { useState } from "react";
import { Layout, Menu, Button, Row, Col, Avatar, Input } from "antd";
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
  MenuOutlined,
  CommentOutlined,
  FullscreenOutlined,
  BellOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

import DataTable from "../../components/DataTable/DataTable";
import "./dashboard.scss";
import Logo from "../../components/Logo/Logo";
import MenuSet from "../../components/Menu/Menu";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

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
            <Row>
              <Col span={15} className="left">
                <Button
                  type="text"
                  shape="circle"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 44,
                    height: 44,
                  }}
                />

                <Search
                  className="searchBar_header"
                  placeholder="Search for results..."
                  onSearch={onSearch}
                  allowClear
                  size="large"
                />
              </Col>
              <Col span={9} className="right">
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<FileProtectOutlined />}
                />

                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<FullscreenOutlined />}
                />
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<BellOutlined />}
                />

                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<CommentOutlined />}
                />

                <Avatar
                  style={{ backgroundColor: "#f56a00", margin: "5px" }}
                  size={40}
                  gap={5}
                  src="https://react.spruko.com/zanex/preview/assets/8-2282942f.jpg"
                ></Avatar>
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<MenuOutlined />}
                />
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<SettingOutlined />}
                />
              </Col>
            </Row>
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
