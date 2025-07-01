import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

const sellerAdsListSlice = createSlice({
  name: "sellerAdsListSlice",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = sellerAdsListSlice.actions;

export default sellerAdsListSlice.reducer;
