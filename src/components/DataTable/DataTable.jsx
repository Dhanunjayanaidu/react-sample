import React, { useEffect, useState } from "react";
import { Table, Avatar } from "antd";
import { calc } from "antd/es/theme/internal";

const DataTable = () => {
  const [columns] = useState([
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      width: "15%",
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortDirections: ["ascend", "descend"],
      render: (_, record) => (
        <>
          <Avatar src={record.image} />
          {record.firstName + " " + record.lastName}
        </>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age.length - b.age.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.length - b.gender.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "10%",
      sorter: (a, b) => a.phone.length - b.phone.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      sorter: (a, b) => a.birthDate.length - b.birthDate.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      sorter: (a, b) => a.email.bloodGroup - b.bloodGroup.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Height",
      dataIndex: "height",
      sorter: (a, b) => a.height.length - b.height.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      sorter: (a, b) => a.weight.length - b.weight.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
    {
      title: "Eye Color",
      dataIndex: "eyeColor",
      sorter: (a, b) => a.eyeColor.length - b.eyeColor.length,
      sortDirections: ["ascend", "descend"],
      align: "center",
    },
  ]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result.users);
      });
    // .then(console.log);
  }, []);

  return (
    <Table
      className="dataTable"
      columns={columns}
      dataSource={dataSource}
      size="small"
      scroll={{
        x: 1500,
        // y: "calc(100vh - 193px)",
      }}
    />
  );
};
export default DataTable;
