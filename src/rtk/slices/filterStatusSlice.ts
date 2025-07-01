import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

const filterStatusSlice = createSlice({
  name: "filterStatusSlice",
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

export const { toggle, setTrue, setFalse } = filterStatusSlice.actions;

export default filterStatusSlice.reducer;
