import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: true,
};

const favoriteListSlice = createSlice({
  name: "favoriteListSlice",
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

export const { setTrue, setFalse } = favoriteListSlice.actions;

export default favoriteListSlice.reducer;
