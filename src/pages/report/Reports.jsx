import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line
} from "recharts";
import { Card } from "antd";
import "./Reports.css";

const revenueData = [
  { date: "May 13", revenue: 2400 },
  { date: "May 14", revenue: 2800 },
  { date: "May 15", revenue: 1800 },
  { date: "May 16", revenue: 3500 },
  { date: "May 17", revenue: 3000 },
  { date: "May 18", revenue: 4200 },
];

const topRestaurants = [
  { name: "Spice Villa", earnings: 12400 },
  { name: "Pizza Corner", earnings: 10800 },
  { name: "Grill House", earnings: 9800 },
  { name: "Biryani Express", earnings: 8600 },
  { name: "Tandoori Treats", earnings: 7400 },
];

const Reports = () => {
  return (
    <div className="reports-container">
      <h2 className="page-heading">Reports &  <span className="page-heading2">Analytics</span></h2>

      <div className="charts-container">
        <Card title="Revenue Over Time" className="chart-card">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Top Earning Restaurants" className="chart-card">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topRestaurants}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#eab308" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
