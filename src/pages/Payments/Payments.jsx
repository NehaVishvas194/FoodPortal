import React, { useState } from "react";
import { Table, Tag, DatePicker, Select, Card } from "antd";
import "./Payments.css";
import {Input} from "antd"

const { RangePicker } = DatePicker;
const { Option } = Select;

const initialPayments = [
  {
    key: "1",
    orderId: "ORD001",
    restaurant: "Spice Villa",
    customer: "Ravi Sharma",
    date: "2025-05-18",
    amount: 1200,
    commission: 120,
    status: "Paid",
  },
  {
    key: "2",
    orderId: "ORD002",
    restaurant: "Pizza Corner",
    customer: "Neha Patel",
    date: "2025-05-18",
    amount: 750,
    commission: 75,
    status: "Unpaid",
  },
  {
    key: "3",
    orderId: "ORD003",
    restaurant: "Grill House",
    customer: "Amit Singh",
    date: "2025-05-17",
    amount: 980,
    commission: 98,
    status: "Paid",
  },
];

const Payments = () => {
  const [payments, setPayments] = useState(initialPayments);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
    },
    {
      title: "Restaurant",
      dataIndex: "restaurant",
    },
    {
      title: "Customer",
      dataIndex: "customer",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount (₹)",
      dataIndex: "amount",
    },
    {
      title: "Commission (₹)",
      dataIndex: "commission",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Paid" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  const totalEarnings = payments.reduce((acc, p) => acc + p.amount, 0);
  const totalCommission = payments.reduce((acc, p) => acc + p.commission, 0);

  return (
    <div className="payments-container">
      <div style={{display:"flex",justifyContent:"space-between", marginBottom:"20px"}}>
    <h2 className="page-heading">Payments & <span>Earnings</span></h2>
    <Input style={{width:"30%"}} placeholder="Serch by OrderId.."/>
      </div>
      

      <div className="filters-container">
        <RangePicker />
        <Select defaultValue="All" style={{ width: 200 }}>
          <Option value="All">All Restaurants</Option>
          <Option value="Spice Villa">Spice Villa</Option>
          <Option value="Pizza Corner">Pizza Corner</Option>
          <Option value="Grill House">Grill House</Option>
        </Select>
      </div>

      <div className="summary-cards">
        <Card title="Total Earnings" bordered>
          ₹{totalEarnings}
        </Card>
        <Card title="Total Commission" bordered>
          ₹{totalCommission}
        </Card>
      </div>

      <Table
        columns={columns}
        dataSource={payments}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Payments;
