import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { toggle, setTrue, setFalse } = toggleSlice.actions;

export default toggleSlice.reducer;
