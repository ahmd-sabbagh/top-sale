import axios from "@/lib/axios";
import { CommentResponse } from "@/utils/dtos";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: CommentResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: true,
  error: null,
};

export const featchRecentComments = createAsyncThunk(
  "getRecentComments/featchRecentComments",
  async (id: string) => {
    const response = await axios.get(`/api/ads/${id}/recent-comments`);
    return response.data.data;
  }
);

const dataSlice = createSlice({
  name: "getRecentComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(featchRecentComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        featchRecentComments.fulfilled,
        (state, action: PayloadAction<CommentResponse>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(featchRecentComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default dataSlice.reducer;
