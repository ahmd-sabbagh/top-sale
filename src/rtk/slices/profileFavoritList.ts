import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

const profileFavoritList = createSlice({
  name: "profileFavoritList",
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

export const { setTrue, setFalse } = profileFavoritList.actions;

export default profileFavoritList.reducer;
