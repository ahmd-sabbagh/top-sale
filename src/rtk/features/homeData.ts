import axios from "@/lib/axios";
import { HomeData } from "@/utils/dtos";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: HomeData | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: true,
  error: null,
};

export const fetchDataHome = createAsyncThunk(
  "homeData/fetchDataHome",
  async () => {
    return await axios.get(`/api/home`).then((res) => res.data.data);
  }
);

const dataSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataHome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDataHome.fulfilled,
        (state, action: PayloadAction<HomeData>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchDataHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default dataSlice.reducer;
