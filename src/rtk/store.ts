import { configureStore } from "@reduxjs/toolkit";
import profileFavoritList from "./slices/profileFavoritList";
import sellerAdsListSlice from "./slices/sellerAdsListSlice";
import toggleReducer from "./slices/sortSlice";
import filterStatusReducer from "./slices/filterStatusSlice";
import openChatSlice from "./slices/openChatSlice";
import favoriteListSlice from "./slices/favoriteListSlice";
import phoneReducer from "./features/phoneSlice";
import otpReducer from "./features/otpSlice";

export const store = configureStore({
  reducer: {
    openChat: openChatSlice,
    profileFavList: profileFavoritList,
    sellerAdsListSlice: sellerAdsListSlice,
    sort: toggleReducer,
    filterStatus: filterStatusReducer,
    favoriteListSlice:favoriteListSlice,
    phone: phoneReducer,
    otp: otpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
