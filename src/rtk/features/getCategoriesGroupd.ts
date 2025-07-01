import axios from "@/lib/axios";
import { MainCategory } from "@/utils/dtos";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: MainCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchAdsLinks = createAsyncThunk(
  "categories/fetchAdsLinks",
  async () => {
    const res = await axios.get("/api/getCategoriesGroupd");
    return res.data.data as MainCategory[];
  }
);

const dataSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdsLinks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdsLinks.fulfilled, (state, action: PayloadAction<MainCategory[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdsLinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default dataSlice.reducer;
