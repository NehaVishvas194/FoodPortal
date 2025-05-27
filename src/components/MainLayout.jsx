import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineBell,
  AiOutlineBarChart,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineRestaurant,
  MdOutlineReportProblem,
  MdRateReview,
} from "react-icons/md";
import { RiCoupon3Line, RiLockPasswordLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import logo_png from "../assets/logo.png";
const adminName = localStorage.getItem("name");

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveKey = () => {
    const path = location.pathname.replace("/admin/", "");
    return path || "dashboard";
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear storage and redirect
    localStorage.clear();
    navigate("/");
  };

  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuItems = [
    { key: "dashboard", icon: AiOutlineDashboard, label: "Dashboard" },
    { key: "manage-customers", icon: AiOutlineUser, label: "Manage Customers" },
    {
      key: "manage-restaurants",
      icon: MdOutlineRestaurant,
      label: "Manage Restaurants",
    },
    { key: "manage-orders", icon: IoIosListBox, label: "Manage Orders" },
    { key: "payments", icon: FaRegCreditCard, label: "Payments & Earnings" },
    { key: "reports", icon: MdRateReview, label: "Reports" },
    { key: "analytics", icon: AiOutlineBarChart, label: "Analytics" },
    { key: "notifications", icon: AiOutlineBell, label: "Notifications" },
    {
      key: "complaints",
      icon: MdOutlineReportProblem,
      label: "Complaints & Contact",
    },
    {
      key: "policies",
      icon: TbFileDescription,
      label: "Policies",
      children: [
        { key: "terms", label: "Terms & Conditions" },
        { key: "privacy", label: "Privacy Policy" },
        { key: "contact-details", label: "Update Contact Details" },
      ],
    },
    { key: "admin-access", icon: RiLockPasswordLine, label: "Admin Access" },
    { key: "settings", icon: AiOutlineSetting, label: "Settings" },
    { key: "signout", icon: AiOutlineLogout, label: "Logout" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white transition-all duration-300 ease-in-out ${
          collapsed ? "w-16" : "w-64"
        } overflow-y-auto main_menu`}
      >
        <div className="flex justify-center">
          <img
            src={logo_png}
            alt="Logo"
            className={`transition-all duration-300 ${
              collapsed ? "w-10" : "w-20"
            }`}
          />
        </div>
        <nav className="flex flex-col gap-1 ">
          {menuItems.map((item) => (
            <div
              key={item.key}
              onClick={() => {
                if (item.key === "signout") signOut();
                else
                  navigate(
                    `/admin/${item.key === "dashboard" ? "" : item.key}`
                  );
              }}
              className={`flex items-center gap-3 px-4 py-2 m-1 cursor-pointer transition-all
                ${
                  getActiveKey() === item.key
                    ? "bg-red-500 text-white"
                    : "hover:bg-red-500 hover:text-white text-gray-700"
                }`}
            >
              <item.icon className="text-lg" />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-2 bg-white">
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <MenuIcon className="text-red-500" />
            ) : (
              <CloseIcon className="text-red-500" />
            )}
          </button>
          <div className="flex items-center gap-1 text-sm text-red-500 font-medium">
            <IconButton onClick={handleClick}>
              <Avatar
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                sx={{ width: 30, height: 30 }}
              />
            </IconButton>
            <span>{adminName}</span>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                Change Password
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 flex-1 overflow-y-auto page_layout">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;