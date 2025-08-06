import axios from "@/lib/axios";
import { CommentResponse, Comment } from "@/utils/dtos";
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
  reducers: {
    addCommentToList: (state, action: PayloadAction<Comment>) => {
      if (state.data) {
        state.data.comments.unshift(action.payload);
      }
    },
    updateComment(state, action: PayloadAction<Comment>) {
      const updated = action.payload;
      const idx = state.data?.comments.findIndex((c) => c._id === updated._id);
      if (idx !== undefined && idx !== -1 && state.data) {
        state.data.comments[idx] = updated;
      }
    },
    deleteComment(state, action: PayloadAction<string>) {
      if (state.data) {
        state.data.comments = state.data.comments.filter(
          (comment) => comment._id !== action.payload
        );
      }
    },
  },
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
export const { addCommentToList, updateComment, deleteComment } =
  dataSlice.actions;
