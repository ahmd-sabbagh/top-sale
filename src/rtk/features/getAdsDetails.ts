import axios from "@/lib/axios";
import { AdsDetails } from "@/utils/dtos";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: AdsDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: true,
  error: null,
};

export const featchAdsDetails = createAsyncThunk(
  "getAdsDetails/featchAdsDetails",
  async (id: string) => {
    const response = await axios.get(`/api/ads/${id}`);
    return response.data.data;
  }
);

const dataSlice = createSlice({
  name: "getAdsDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(featchAdsDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        featchAdsDetails.fulfilled,
        (state, action: PayloadAction<AdsDetails>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(featchAdsDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default dataSlice.reducer;
