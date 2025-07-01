import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

interface PhoneState {
  loading: boolean;
  error: string | null;
  success: boolean;
  message: string | null;
}

const initialState: PhoneState = {
  loading: false,
  error: null,
  success: false,
  message: null,
};

export const sendPhoneNumber = createAsyncThunk(
  "phone/sendPhoneNumber",
  async (phone: string, thunkAPI) => {
    try {
      const res = await axios.post(`/api/login`, {
        mobile: `+974${phone}`,
      });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "فشل الإرسال"
      );
    }
  }
);

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    resetPhoneState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPhoneNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendPhoneNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(sendPhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetPhoneState } = phoneSlice.actions;
export default phoneSlice.reducer;
