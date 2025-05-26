import React from "react";
import { Table, Tag, Avatar, Button } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import "./ManageRestaurants.css";
import { Input } from "antd";

const restaurantData = [
  {
    key: "1",
    name: "Spicy Spoon",
    owner: "Rahul Mehta",
    email: "spoon@gmail.com",
    phone: "9876543210",
    area: "Andheri",
    status: "Active",
  },
  {
    key: "2",
    name: "Tandoori Tales",
    owner: "Faeem Sheikh",
    email: "tales@gmail.com",
    phone: "9123456780",
    area: "Bandra",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Green Garden",
    owner: "Vikram Singh",
    email: "green@gmail.com",
    phone: "9900011122",
    area: "Powai",
    status: "Active",
  },
   {
    key: "1",
    name: "Spicy Spoon",
    owner: "Rahul Mehta",
    email: "spoon@gmail.com",
    phone: "9876543210",
    area: "Andheri",
    status: "Active",
  },
   {
    key: "1",
    name: "Spicy Spoon",
    owner: "Rahul Mehta",
    email: "spoon@gmail.com",
    phone: "9876543210",
    area: "Andheri",
    status: "Active",
  },
   {
    key: "1",
    name: "Spicy Spoon",
    owner: "Rahul Mehta",
    email: "spoon@gmail.com",
    phone: "9876543210",
    area: "Andheri",
    status: "Active",
  },
   {
    key: "1",
    name: "Spicy Spoon",
    owner: "Rahul Mehta",
    email: "spoon@gmail.com",
    phone: "9876543210",
    area: "Andheri",
    status: "Active",
  },
];

const ManageRestaurants = () => {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "name",
      key: "avatar",
      render: (text) => (
        <Avatar style={{ backgroundColor: "#ef4444", color: "#fff" }}>
          {text.charAt(0)}
        </Avatar>
      ),
    },
    {
      title: "Restaurant Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong className="restaurant-name">{text}</strong>,
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="table-actions">
          <Button
            icon={<EyeOutlined />}
            size="small"
            className="action-btn view-btn"
          />
          <Button
            icon={<EditOutlined />}
            size="small"
            className="action-btn edit-btn"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="manage-restaurants-container " >
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
    <h2 className="page-heading">Manage <span className="page-heading2">Restaurants</span></h2>
    <input placeholder="Serch by Restaurants..." style={{width:"30%",}} />
      </div>
      
      <Table
        columns={columns}
        dataSource={restaurantData}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};
// is logo ke hisab se btao ki sidebar ka bg color kya hona chhye  our
export default ManageRestaurants;
