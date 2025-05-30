import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TextField,
  Typography,
  Chip,
  Box,
  TablePagination,
} from "@mui/material";

const customers = [
  {
    key: "1",
    name: "Rohit Mittal",
    email: "rohit@gmail.com",
    phone: "9876543210",
    date: "2024-03-01",
    status: "Active",
  },
  {
    key: "2",
    name: "Anjali Mehra",
    email: "anjali@yahoo.com",
    phone: "9123456780",
    date: "2024-03-11",
    status: "Blocked",
  },
  {
    key: "3",
    name: "Faizan Khan",
    email: "faizan@outlook.com",
    phone: "9900011122",
    date: "2024-03-15",
    status: "Active",
  },
  {
    key: "4",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "9811122233",
    date: "2024-03-18",
    status: "Active",
  },
  {
    key: "5",
    name: "Aman Verma",
    email: "aman@yahoo.com",
    phone: "9988776655",
    date: "2024-03-20",
    status: "Blocked",
  },
  {
    key: "6",
    name: "Sana Sheikh",
    email: "sana@gmail.com",
    phone: "9990001111",
    date: "2024-03-22",
    status: "Active",
  },
  {
    key: "7",
    name: "Karan Sinha",
    email: "karan@hotmail.com",
    phone: "9877665544",
    date: "2024-03-25",
    status: "Active",
  },
  {
    key: "8",
    name: "Meera Joshi",
    email: "meera@yahoo.com",
    phone: "9001122334",
    date: "2024-03-26",
    status: "Blocked",
  },
  {
    key: "9",
    name: "Abhay Gupta",
    email: "abhay@gmail.com",
    phone: "9887766554",
    date: "2024-03-27",
    status: "Active",
  },
  {
    key: "10",
    name: "Sneha Rao",
    email: "sneha@outlook.com",
    phone: "9112233445",
    date: "2024-03-28",
    status: "Blocked",
  },
  {
    key: "11",
    name: "Varun Tiwari",
    email: "varun@gmail.com",
    phone: "9898989898",
    date: "2024-03-29",
    status: "Active",
  },
  {
    key: "12",
    name: "Neha Desai",
    email: "neha@yahoo.com",
    phone: "9321654789",
    date: "2024-03-30",
    status: "Blocked",
  },
  {
    key: "13",
    name: "Yash Rathi",
    email: "yash@outlook.com",
    phone: "9654123789",
    date: "2024-04-01",
    status: "Active",
  },
  {
    key: "14",
    name: "Tanya Kapoor",
    email: "tanya@gmail.com",
    phone: "9876501234",
    date: "2024-04-02",
    status: "Active",
  },
  {
    key: "15",
    name: "Rajat Nanda",
    email: "rajat@yahoo.com",
    phone: "9101234567",
    date: "2024-04-03",
    status: "Blocked",
  },
  {
    key: "16",
    name: "Shivani Dubey",
    email: "shivani@gmail.com",
    phone: "9201234567",
    date: "2024-04-04",
    status: "Active",
  },
  {
    key: "17",
    name: "Nikhil Jain",
    email: "nikhil@outlook.com",
    phone: "9800000000",
    date: "2024-04-05",
    status: "Blocked",
  },
  {
    key: "18",
    name: "Rhea Banerjee",
    email: "rhea@gmail.com",
    phone: "9876112233",
    date: "2024-04-06",
    status: "Active",
  },
  {
    key: "19",
    name: "Arjun Malhotra",
    email: "arjun@yahoo.com",
    phone: "9865223344",
    date: "2024-04-07",
    status: "Blocked",
  },
  {
    key: "20",
    name: "Isha Kapoor",
    email: "isha@gmail.com",
    phone: "9312456789",
    date: "2024-04-08",
    status: "Active",
  },
  {
    key: "21",
    name: "Ankit Bansal",
    email: "ankit@hotmail.com",
    phone: "9871234560",
    date: "2024-04-09",
    status: "Blocked",
  },
  {
    key: "22",
    name: "Preeti Sharma",
    email: "preeti@gmail.com",
    phone: "9881234567",
    date: "2024-04-10",
    status: "Active",
  },
  {
    key: "23",
    name: "Kunal Roy",
    email: "kunal@yahoo.com",
    phone: "9933445566",
    date: "2024-04-11",
    status: "Active",
  },
  {
    key: "24",
    name: "Divya Singh",
    email: "divya@gmail.com",
    phone: "9870001112",
    date: "2024-04-12",
    status: "Blocked",
  },
  {
    key: "25",
    name: "Mohit Arora",
    email: "mohit@outlook.com",
    phone: "9765432109",
    date: "2024-04-13",
    status: "Active",
  },
  {
    key: "26",
    name: "Jaya Mishra",
    email: "jaya@gmail.com",
    phone: "9812233445",
    date: "2024-04-14",
    status: "Blocked",
  },
  {
    key: "27",
    name: "Rohan Lal",
    email: "rohan@yahoo.com",
    phone: "9321123456",
    date: "2024-04-15",
    status: "Active",
  },
  {
    key: "28",
    name: "Suman Das",
    email: "suman@gmail.com",
    phone: "9988776650",
    date: "2024-04-16",
    status: "Active",
  },
  {
    key: "29",
    name: "Pooja Bhatt",
    email: "pooja@outlook.com",
    phone: "9760012345",
    date: "2024-04-17",
    status: "Blocked",
  },
  {
    key: "30",
    name: "Rahul Yadav",
    email: "rahul@gmail.com",
    phone: "9845123678",
    date: "2024-04-18",
    status: "Active",
  },
  {
    key: "31",
    name: "Tanvi Chopra",
    email: "tanvi@yahoo.com",
    phone: "9812345670",
    date: "2024-04-19",
    status: "Blocked",
  },
  {
    key: "32",
    name: "Aditya Rawat",
    email: "aditya@gmail.com",
    phone: "9871010101",
    date: "2024-04-20",
    status: "Active",
  },
  {
    key: "33",
    name: "Ritika Jain",
    email: "ritika@outlook.com",
    phone: "9321987654",
    date: "2024-04-21",
    status: "Active",
  },
  {
    key: "34",
    name: "Manav Joshi",
    email: "manav@gmail.com",
    phone: "9998887776",
    date: "2024-04-22",
    status: "Blocked",
  },
  {
    key: "35",
    name: "Aarti Nair",
    email: "aarti@yahoo.com",
    phone: "9123456721",
    date: "2024-04-23",
    status: "Active",
  },
  {
    key: "36",
    name: "Siddharth Kulkarni",
    email: "siddharth@gmail.com",
    phone: "9876543211",
    date: "2024-04-24",
    status: "Blocked",
  },
  {
    key: "37",
    name: "Simran Kaur",
    email: "simran@outlook.com",
    phone: "9765432189",
    date: "2024-04-25",
    status: "Active",
  },
  {
    key: "38",
    name: "Harsh Vyas",
    email: "harsh@gmail.com",
    phone: "9012345678",
    date: "2024-04-26",
    status: "Blocked",
  },
  {
    key: "39",
    name: "Deepa Rani",
    email: "deepa@yahoo.com",
    phone: "9876123456",
    date: "2024-04-27",
    status: "Active",
  },
  {
    key: "40",
    name: "Vikas Singh",
    email: "vikas@gmail.com",
    phone: "9654321098",
    date: "2024-04-28",
    status: "Blocked",
  },
  {
    key: "41",
    name: "Namrata Ghosh",
    email: "namrata@outlook.com",
    phone: "9811223344",
    date: "2024-04-29",
    status: "Active",
  },
  {
    key: "42",
    name: "Anupam Das",
    email: "anupam@gmail.com",
    phone: "9334455667",
    date: "2024-04-30",
    status: "Blocked",
  },
  {
    key: "43",
    name: "Bhavna Patel",
    email: "bhavna@yahoo.com",
    phone: "9877654321",
    date: "2024-05-01",
    status: "Active",
  },
  {
    key: "44",
    name: "Devendra Rao",
    email: "devendra@gmail.com",
    phone: "9890011223",
    date: "2024-05-02",
    status: "Blocked",
  },
  {
    key: "45",
    name: "Komal Sinha",
    email: "komal@outlook.com",
    phone: "9811223345",
    date: "2024-05-03",
    status: "Active",
  },
  {
    key: "46",
    name: "Ashok Yadav",
    email: "ashok@gmail.com",
    phone: "9111122233",
    date: "2024-05-04",
    status: "Blocked",
  },
  {
    key: "47",
    name: "Reena Kaul",
    email: "reena@yahoo.com",
    phone: "9332233445",
    date: "2024-05-05",
    status: "Active",
  },
  {
    key: "48",
    name: "Aayush Shah",
    email: "aayush@gmail.com",
    phone: "9988776651",
    date: "2024-05-06",
    status: "Blocked",
  },
  {
    key: "49",
    name: "Poonam Reddy",
    email: "poonam@outlook.com",
    phone: "9801234567",
    date: "2024-05-07",
    status: "Active",
  },
  {
    key: "50",
    name: "Gaurav Bhatt",
    email: "gaurav@gmail.com",
    phone: "9876540000",
    date: "2024-05-08",
    status: "Active",
  },
];

const ManageCustomer = () => {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;
  const [search, setSearch] = useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={2}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="text.primary">
          Manage Customers
        </Typography>

        <TextField
          size="small"
          placeholder="Search by Customer..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 250 }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Image</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>Registered On</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer, index) => (
                <TableRow key={customer.key}>
                  <TableCell key={`${customer.key}-${index}`}>
                    <Avatar
                      alt={customer.name}
                      src={customer.imageUrl}
                      sx={{ bgcolor: "#ef4444", color: "#fff" }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {customer.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {customer.email}
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {customer.phone}
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {customer.date}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={customer.status}
                      color={customer.status === "Active" ? "success" : "error"}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredCustomers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
        />
      </TableContainer>
    </Box>
  );
};

export default ManageCustomer;