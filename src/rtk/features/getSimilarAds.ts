import axios from "@/lib/axios";
import { SimilarAds } from "@/utils/dtos";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: SimilarAds | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: true,
  error: null,
};

export const featchSimilarAds = createAsyncThunk(
  "getSimilarAds/featchSimilarAds",
  async (id: string) => {
    const response = await axios.get(`/api/ads/${id}/related`);
    return response.data.data;
  }
);

const dataSlice = createSlice({
  name: "getSimilarAds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(featchSimilarAds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        featchSimilarAds.fulfilled,
        (state, action: PayloadAction<SimilarAds>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(featchSimilarAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default dataSlice.reducer;
