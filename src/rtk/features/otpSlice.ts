import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
interface OtpState {
  loading: boolean;
  error: string | null;
  success: boolean;
  message: string | null;
}

const initialState: OtpState = {
  loading: false,
  error: null,
  success: false,
  message: null,
};

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload: { mobile: string; code: string }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/login`, payload);

      if (!response.data.success) {
        return thunkAPI.rejectWithValue(
          response.data.message || "فشل التحقق من الكود"
        );
      }

      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "فشل التحقق من الكود"
      );
    }
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    resetOtpState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload?.message;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetOtpState } = otpSlice.actions;
export default otpSlice.reducer;
