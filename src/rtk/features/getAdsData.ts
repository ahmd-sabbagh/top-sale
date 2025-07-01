import axios from "@/lib/axios";
import { CarAd } from "@/utils/dtos";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: CarAd[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchAdsData = createAsyncThunk(
  "mainAdsData/fetchAdsData",
  async (query: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, String(value));
      }
    });

    const res = await axios.get(`/api/ads?${params.toString()}`);
    return res.data.data.ads as CarAd[];
  }
);

const dataSlice = createSlice({
  name: "mainAdsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAdsData.fulfilled,
        (state, action: PayloadAction<CarAd[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAdsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default dataSlice.reducer;
