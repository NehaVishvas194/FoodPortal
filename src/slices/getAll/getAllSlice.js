import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../features/Api/BaseUrl";

export const fetchRestaurants = createAsyncThunk(
  "getAll/fetchRestaurants",
  async (_, { getState }) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}restaurants/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const fetchViewRestaurant = createAsyncThunk(
  "getAll/fetchViewRestaurant",
  async (restoId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${baseUrl}restaurant/${restoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Data fetch failed");
    }
  }
);

export const deleteRestaurants = createAsyncThunk(
  "getAll/deleteRestaurants",
  async (restaurantId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${baseUrl}restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return restaurantId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || "Delete failed");
    }
  }
);

const getAllSlice = createSlice({
  name: "getAll",
  initialState: {
    restaurants: [],
    restaurantDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchViewRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchViewRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(fetchViewRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRestaurants.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = state.restaurants.filter(
          (res) => res.id !== action.payload
        );
      })
      .addCase(deleteRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getAllSlice.reducer;
