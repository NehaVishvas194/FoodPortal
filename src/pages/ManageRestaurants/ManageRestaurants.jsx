import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurants,
  fetchViewRestaurant,
  deleteRestaurants,
} from "../../slices/getAll/getAllSlice";

const ManageRestaurants = () => {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector((state) => state.getAll);
  const { restaurantDetails } = useSelector((state) => state.getAll);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredData = restaurants.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this restaurant?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteRestaurants(id)).then(() => {
          Swal.fire("Deleted", "The restaurant has been deleted", "success");
        });
      }
    });
  };

  const handleView = (id) => {
    dispatch(fetchViewRestaurant(id));
    setOpen(true);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box p={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" fontWeight={600} color="text.primary">
            Manage Restaurants
          </Typography>
          <TextField
            size="small"
            placeholder="Search by Restaurant..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 250 }}
          />
        </Box>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f9fafb" }}>
              <TableRow>
                <TableCell>
                  <strong>Image</strong>
                </TableCell>
                <TableCell>
                  <strong>Restaurant Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Owner Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Email</strong>
                </TableCell>
                <TableCell>
                  <strong>Phone</strong>
                </TableCell>
                <TableCell>
                  <strong>Address</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((restaurant, index) => (
                  <TableRow key={`${restaurant.id}-${index}`}>
                    <TableCell sx={{ fontSize: "13px" }}>
                      <Avatar
                        alt={restaurant.name}
                        src={restaurant.image}
                        sx={{ bgcolor: "#ef4444", color: "#fff" }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: "13px" }}>
                      {restaurant.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "13px" }}>
                      {restaurant.ownerName}
                    </TableCell>{" "}
                    <TableCell sx={{ fontSize: "13px" }}>
                      {restaurant.email}
                    </TableCell>{" "}
                    <TableCell sx={{ fontSize: "13px" }}>
                      {restaurant.phone}
                    </TableCell>
                    <TableCell sx={{ fontSize: "13px" }}>
                      {restaurant.address}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={restaurant.status}
                        size="small"
                        color={
                          restaurant.status === "open" ? "success" : "error"
                        }
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap={1}>
                        <IconButton
                          size="small"
                          sx={{ color: "#2563eb", border: "1px solid #2563eb" }}
                          onClick={() => handleView(restaurant.id)}
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ color: "#f59e0b", border: "1px solid #f59e0b" }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ color: "red", border: "1px solid red" }}
                          onClick={() => handleDelete(restaurant.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
          />
        </TableContainer>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              id="modal-modal-title"
              fontWeight={600}
              color="text.primary"
            >
              Restaurant Details
            </Typography>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Restaurant Name</strong>
                  </TableCell>
                  <TableCell>{restaurantDetails?.name || "N/A"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Owner Name</strong>
                  </TableCell>
                  <TableCell>{restaurantDetails?.ownerName || "N/A"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Email</strong>
                  </TableCell>
                  <TableCell>{restaurantDetails?.email || "N/A"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Phone</strong>
                  </TableCell>
                  <TableCell>{restaurantDetails?.phone || "N/A"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Address</strong>
                  </TableCell>
                  <TableCell>{restaurantDetails?.address || "N/A"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Status</strong>
                  </TableCell>
                  <TableCell>{restaurantDetails?.status || "N/A"}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Box mt={3} textAlign="right">
              <button
                onClick={handleClose}
                variant="contained"
                className="bg-red-500 py-1 px-2 text-white"
              >
                Close
              </button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ManageRestaurants;
