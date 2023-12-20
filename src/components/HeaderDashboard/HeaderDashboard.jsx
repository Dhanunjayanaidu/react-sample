import React from "react";
import "./HeaderDashboard.scss";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const HeaderDashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <section className="HeaderDashboard">
        <h3>HeaderDashboard content will be here</h3>
      </section>
    </>
  );
};

export default HeaderDashboard;
