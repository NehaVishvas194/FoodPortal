import React, { useState } from "react";
import { Table, Button, Select, Tag, Modal, Descriptions, message } from "antd";
import { EyeOutlined, PhoneOutlined } from "@ant-design/icons";
import "./ManageOrders.css";
import { Input } from "antd";
const { Option } = Select;

const initialOrders = [
  {
    key: "1",
    orderId: "FDX12101",
    customer: "Customer 1",
    restaurant: "Spice Villa",
    total: 250,
    status: "Pending",
    driver: "Suresh",
  },
  {
    key: "2",
    orderId: "FDX12102",
    customer: "Customer 2",
    restaurant: "Pizza Corner",
    total: 310,
    status: "Delivered",
    driver: "Amit",
  },
  {
    key: "3",
    orderId: "FDX12103",
    customer: "Customer 3",
    restaurant: "Burger King",
    total: 185,
    status: "In-Progress",
    driver: "Rakesh",
  },
  {
    key: "4",
    orderId: "FDX12104",
    customer: "Customer 4",
    restaurant: "Taco Town",
    total: 420,
    status: "Cancelled",
    driver: "Deepak",
  },
  {
    key: "5",
    orderId: "FDX12105",
    customer: "Customer 5",
    restaurant: "Sushi Express",
    total: 370,
    status: "Pending",
    driver: "Kiran",
  },
  {
    key: "6",
    orderId: "FDX12106",
    customer: "Customer 6",
    restaurant: "Spice Villa",
    total: 295,
    status: "Delivered",
    driver: "Suresh",
  },
  {
    key: "7",
    orderId: "FDX12107",
    customer: "Customer 7",
    restaurant: "Pizza Corner",
    total: 330,
    status: "In-Progress",
    driver: "Amit",
  },
  {
    key: "8",
    orderId: "FDX12108",
    customer: "Customer 8",
    restaurant: "Burger King",
    total: 210,
    status: "Cancelled",
    driver: "Rakesh",
  },
  {
    key: "9",
    orderId: "FDX12109",
    customer: "Customer 9",
    restaurant: "Taco Town",
    total: 410,
    status: "Pending",
    driver: "Deepak",
  },
  {
    key: "10",
    orderId: "FDX12110",
    customer: "Customer 10",
    restaurant: "Sushi Express",
    total: 390,
    status: "Delivered",
    driver: "Kiran",
  },
  {
    key: "11",
    orderId: "FDX12111",
    customer: "Customer 11",
    restaurant: "Spice Villa",
    total: 300,
    status: "In-Progress",
    driver: "Suresh",
  },
  {
    key: "12",
    orderId: "FDX12112",
    customer: "Customer 12",
    restaurant: "Pizza Corner",
    total: 270,
    status: "Cancelled",
    driver: "Amit",
  },
  {
    key: "13",
    orderId: "FDX12113",
    customer: "Customer 13",
    restaurant: "Burger King",
    total: 195,
    status: "Pending",
    driver: "Rakesh",
  },
  {
    key: "14",
    orderId: "FDX12114",
    customer: "Customer 14",
    restaurant: "Taco Town",
    total: 225,
    status: "Delivered",
    driver: "Deepak",
  },
  {
    key: "15",
    orderId: "FDX12115",
    customer: "Customer 15",
    restaurant: "Sushi Express",
    total: 345,
    status: "In-Progress",
    driver: "Kiran",
  },
  {
    key: "16",
    orderId: "FDX12116",
    customer: "Customer 16",
    restaurant: "Spice Villa",
    total: 200,
    status: "Cancelled",
    driver: "Suresh",
  },
  {
    key: "17",
    orderId: "FDX12117",
    customer: "Customer 17",
    restaurant: "Pizza Corner",
    total: 480,
    status: "Pending",
    driver: "Amit",
  },
  {
    key: "18",
    orderId: "FDX12118",
    customer: "Customer 18",
    restaurant: "Burger King",
    total: 315,
    status: "Delivered",
    driver: "Rakesh",
  },
  {
    key: "19",
    orderId: "FDX12119",
    customer: "Customer 19",
    restaurant: "Taco Town",
    total: 275,
    status: "In-Progress",
    driver: "Deepak",
  },
  {
    key: "20",
    orderId: "FDX12120",
    customer: "Customer 20",
    restaurant: "Sushi Express",
    total: 260,
    status: "Cancelled",
    driver: "Kiran",
  },
  {
    key: "21",
    orderId: "FDX12121",
    customer: "Customer 21",
    restaurant: "Spice Villa",
    total: 440,
    status: "Pending",
    driver: "Suresh",
  },
  {
    key: "22",
    orderId: "FDX12122",
    customer: "Customer 22",
    restaurant: "Pizza Corner",
    total: 190,
    status: "Delivered",
    driver: "Amit",
  },
  {
    key: "23",
    orderId: "FDX12123",
    customer: "Customer 23",
    restaurant: "Burger King",
    total: 225,
    status: "In-Progress",
    driver: "Rakesh",
  },
  {
    key: "24",
    orderId: "FDX12124",
    customer: "Customer 24",
    restaurant: "Taco Town",
    total: 305,
    status: "Cancelled",
    driver: "Deepak",
  },
  {
    key: "25",
    orderId: "FDX12125",
    customer: "Customer 25",
    restaurant: "Sushi Express",
    total: 400,
    status: "Pending",
    driver: "Kiran",
  },
  {
    key: "26",
    orderId: "FDX12126",
    customer: "Customer 26",
    restaurant: "Spice Villa",
    total: 175,
    status: "Delivered",
    driver: "Suresh",
  },
  {
    key: "27",
    orderId: "FDX12127",
    customer: "Customer 27",
    restaurant: "Pizza Corner",
    total: 395,
    status: "In-Progress",
    driver: "Amit",
  },
  {
    key: "28",
    orderId: "FDX12128",
    customer: "Customer 28",
    restaurant: "Burger King",
    total: 285,
    status: "Cancelled",
    driver: "Rakesh",
  },
  {
    key: "29",
    orderId: "FDX12129",
    customer: "Customer 29",
    restaurant: "Taco Town",
    total: 320,
    status: "Pending",
    driver: "Deepak",
  },
  {
    key: "30",
    orderId: "FDX12130",
    customer: "Customer 30",
    restaurant: "Sushi Express",
    total: 365,
    status: "Delivered",
    driver: "Kiran",
  },
  {
    key: "31",
    orderId: "FDX12131",
    customer: "Customer 31",
    restaurant: "Spice Villa",
    total: 210,
    status: "In-Progress",
    driver: "Suresh",
  },
  {
    key: "32",
    orderId: "FDX12132",
    customer: "Customer 32",
    restaurant: "Pizza Corner",
    total: 280,
    status: "Cancelled",
    driver: "Amit",
  },
  {
    key: "33",
    orderId: "FDX12133",
    customer: "Customer 33",
    restaurant: "Burger King",
    total: 270,
    status: "Pending",
    driver: "Rakesh",
  },
  {
    key: "34",
    orderId: "FDX12134",
    customer: "Customer 34",
    restaurant: "Taco Town",
    total: 350,
    status: "Delivered",
    driver: "Deepak",
  },
  {
    key: "35",
    orderId: "FDX12135",
    customer: "Customer 35",
    restaurant: "Sushi Express",
    total: 180,
    status: "In-Progress",
    driver: "Kiran",
  },
  {
    key: "36",
    orderId: "FDX12136",
    customer: "Customer 36",
    restaurant: "Spice Villa",
    total: 220,
    status: "Cancelled",
    driver: "Suresh",
  },
  {
    key: "37",
    orderId: "FDX12137",
    customer: "Customer 37",
    restaurant: "Pizza Corner",
    total: 295,
    status: "Pending",
    driver: "Amit",
  },
  {
    key: "38",
    orderId: "FDX12138",
    customer: "Customer 38",
    restaurant: "Burger King",
    total: 260,
    status: "Delivered",
    driver: "Rakesh",
  },
  {
    key: "39",
    orderId: "FDX12139",
    customer: "Customer 39",
    restaurant: "Taco Town",
    total: 420,
    status: "In-Progress",
    driver: "Deepak",
  },
  {
    key: "40",
    orderId: "FDX12140",
    customer: "Customer 40",
    restaurant: "Sushi Express",
    total: 310,
    status: "Cancelled",
    driver: "Kiran",
  },
  {
    key: "41",
    orderId: "FDX12141",
    customer: "Customer 41",
    restaurant: "Spice Villa",
    total: 185,
    status: "Pending",
    driver: "Suresh",
  },
  {
    key: "42",
    orderId: "FDX12142",
    customer: "Customer 42",
    restaurant: "Pizza Corner",
    total: 390,
    status: "Delivered",
    driver: "Amit",
  },
  {
    key: "43",
    orderId: "FDX12143",
    customer: "Customer 43",
    restaurant: "Burger King",
    total: 330,
    status: "In-Progress",
    driver: "Rakesh",
  },
  {
    key: "44",
    orderId: "FDX12144",
    customer: "Customer 44",
    restaurant: "Taco Town",
    total: 355,
    status: "Cancelled",
    driver: "Deepak",
  },
  {
    key: "45",
    orderId: "FDX12145",
    customer: "Customer 45",
    restaurant: "Sushi Express",
    total: 190,
    status: "Pending",
    driver: "Kiran",
  },
  {
    key: "46",
    orderId: "FDX12146",
    customer: "Customer 46",
    restaurant: "Spice Villa",
    total: 260,
    status: "Delivered",
    driver: "Suresh",
  },
  {
    key: "47",
    orderId: "FDX12147",
    customer: "Customer 47",
    restaurant: "Pizza Corner",
    total: 410,
    status: "In-Progress",
    driver: "Amit",
  },
  {
    key: "48",
    orderId: "FDX12148",
    customer: "Customer 48",
    restaurant: "Burger King",
    total: 245,
    status: "Cancelled",
    driver: "Rakesh",
  },
  {
    key: "49",
    orderId: "FDX12149",
    customer: "Customer 49",
    restaurant: "Taco Town",
    total: 300,
    status: "Pending",
    driver: "Deepak",
  },
  {
    key: "50",
    orderId: "FDX12150",
    customer: "Customer 50",
    restaurant: "Sushi Express",
    total: 375,
    status: "Delivered",
    driver: "Kiran",
  },
];

const statusColors = {
  Pending: "orange",
  Accepted: "blue",
  "In-Progress": "purple",
  Delivered: "green",
  Cancelled: "red",
};

const ManageOrders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [viewModal, setViewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (value, record) => {
    const updatedOrders = orders.map((order) =>
      order.key === record.key ? { ...order, status: value } : order
    );
    setOrders(updatedOrders);
    message.success(`Order ${record.orderId} updated to ${value}`);
  };

  const showDetails = (record) => {
    setSelectedOrder(record);
    setViewModal(true);
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
    },
    {
      title: "Customer",
      dataIndex: "customer",
    },
    {
      title: "Restaurant",
      dataIndex: "restaurant",
    },
    {
      title: "Total (₹)",
      dataIndex: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Select
          defaultValue={status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(value, record)}
        >
          {Object.keys(statusColors).map((s) => (
            <Option value={s} key={s}>
              <Tag color={statusColors[s]}>{s}</Tag>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Driver",
      dataIndex: "driver",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Button
            icon={<EyeOutlined />}
            onClick={() => showDetails(record)}
            size="small"
          >
            View
          </Button>
          <Button
            icon={<PhoneOutlined />}
            style={{ marginLeft: 8 }}
            size="small"
            onClick={() => message.info(`Calling driver: ${record.driver}`)}
          >
            Call Driver
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="orders-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2 className="page-heading">
          Manage <span className="page-heading2">Orders</span>{" "}
        </h2>
        <Input placeholder="Serch by Order Id..." style={{ width: "30%" }} />
      </div>

      <Table
        columns={columns}
        dataSource={orders}
        bordered
        pagination={{ pageSize: 12 }}
      />

      <Modal
        title="Order Details"
        open={viewModal}
        onCancel={() => setViewModal(false)}
        footer={null}
      >
        {selectedOrder && (
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Order ID">
              {selectedOrder.orderId}
            </Descriptions.Item>
            <Descriptions.Item label="Customer">
              {selectedOrder.customer}
            </Descriptions.Item>
            <Descriptions.Item label="Restaurant">
              {selectedOrder.restaurant}
            </Descriptions.Item>
            <Descriptions.Item label="Total Amount">
              ₹{selectedOrder.total}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={statusColors[selectedOrder.status]}>
                {selectedOrder.status}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Driver">
              {selectedOrder.driver}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default ManageOrders;
