import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { MoreOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    filters: [
      {
        text: "Edward",
        value: "Edward",
      },
      {
        text: "Dhanu",
        value: "Dhanu",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
    ellipsis: true,
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "Park",
        value: "Park",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["ascend", "descend", "ascend"],
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 75,
    render: () => <MoreOutlined />,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 18 + i,
    address: `London Park no. ${i}`,
  });
}
const DataTable = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [data]);
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      // antd site header height
      sticky={{
        offsetHeader: 64,
      }}
    />
  );
};
export default DataTable;
