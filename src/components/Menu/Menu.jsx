import React, { useState } from "react";
import {
  AppstoreOutlined,
  DatabaseOutlined,
  GiftOutlined,
  // ContainerOutlined,
  // DesktopOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutlined,
  //   MenuFoldOutlined,
  //   MenuUnfoldOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "MAIN",
    "grp",
    null,
    [getItem("Dashboard", "15", <HomeOutlined />)],
    "group"
  ),
  getItem(
    "WIDGETS",
    "grp",
    null,
    [getItem("Widgets", "16", <AppstoreOutlined />)],
    "group"
  ),
  getItem(
    "ELEMENTS",
    "grp",
    null,
    [
      getItem("Components", "sub2", <DatabaseOutlined />, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
        getItem("Submenu", "sub3", null, [
          getItem("Option 7", "7"),
          getItem("Option 8", "8"),
        ]),
      ]),
      getItem("Elements", "sub4", <InboxOutlined />, [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ],
    "group"
  ),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  {
    type: "divider",
  },

  getItem(
    "PAGES",
    "grp",
    null,
    [getItem("Pages", "13", <GiftOutlined />), getItem("Option 14", "14")],
    "group"
  ),
];
const MenuSet = () => {
  const [collapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <div
    //   style={{
    //     width: 256,
    //   }}
    >
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default MenuSet;
