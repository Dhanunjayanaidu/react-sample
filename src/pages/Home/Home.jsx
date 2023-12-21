import React from "react";
import { Layout, Flex } from "antd";
import {
  BgColorsOutlined,
  GlobalOutlined,
  PieChartOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
// const siderStyle = {
//   textAlign: "center",
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#1677ff",
//   height: "100vh",
// };
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 0,
  overflow: "hidden",
  width: "calc(100% - 0px)",
  maxWidth: "calc(100% - 0px)",
};

function Home() {
  return (
    <>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sider width="auto">
            <Sidebar>
              <Menu>
                <MenuItem>General</MenuItem>
                <MenuItem icon={<HomeOutlined />}> Dashboard</MenuItem>

                <MenuItem>WIDGETS</MenuItem>
                <MenuItem icon={<AppstoreOutlined />}> Widgets</MenuItem>

                <MenuItem>Elements</MenuItem>
                <SubMenu icon={<PieChartOutlined />} label="Components">
                  <MenuItem> Level 1 Submenu</MenuItem>
                  <MenuItem> Level 1 Submenu</MenuItem>
                  <MenuItem> Level 1 Submenu</MenuItem>
                </SubMenu>
                <SubMenu icon={<GlobalOutlined />} label="Elements">
                  <MenuItem> Level 1 Submenu</MenuItem>
                  <MenuItem> Level 1 Submenu</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={<BgColorsOutlined />}
                  label="Advanced Components"
                >
                  <MenuItem> Advanced Components 1</MenuItem>
                  <MenuItem> Advanced Components 2</MenuItem>
                </SubMenu>

                <MenuItem>Charts & Tables</MenuItem>
                <SubMenu icon={<PieChartOutlined />} label="Charts">
                  <MenuItem> Pie charts</MenuItem>
                  <MenuItem> Line charts</MenuItem>
                  <MenuItem> Bar charts</MenuItem>
                </SubMenu>
                <SubMenu icon={<GlobalOutlined />} label="Maps">
                  <MenuItem> Google maps</MenuItem>
                  <MenuItem> Open street maps</MenuItem>
                </SubMenu>
                <SubMenu icon={<BgColorsOutlined />} label="Theme">
                  <MenuItem> Dark</MenuItem>
                  <MenuItem> Light</MenuItem>
                </SubMenu>
                <SubMenu icon={<BgColorsOutlined />} label="Pages">
                  <MenuItem> Page 1</MenuItem>
                  <MenuItem> Page 2</MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
          </Sider>
          <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
}

export default Home;
