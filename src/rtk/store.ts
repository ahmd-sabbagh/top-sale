import { configureStore } from "@reduxjs/toolkit";
import profileFavoritList from "./slices/profileFavoritList";
import sellerAdsListSlice from "./slices/sellerAdsListSlice";
import toggleReducer from "./slices/sortSlice";
import filterStatusReducer from "./slices/filterStatusSlice";
import openChatSlice from "./slices/openChatSlice";
import favoriteListSlice from "./slices/favoriteListSlice";
import phoneReducer from "./features/phoneSlice";
import otpReducer from "./features/otpSlice";
import homeReducer from "./features/homeData";
import adsLinksReducer from "./features/getCategoriesGroupd";
import adsDataReducer from "./features/getAdsData";
import adsDetailReducer from "./features/getAdsDetails";
import similarAdsReducer from "./features/getSimilarAds";
import recentCommentsReducer from "./features/getRecentComments";

export const store = configureStore({
  reducer: {
    openChat: openChatSlice,
    profileFavList: profileFavoritList,
    sellerAdsListSlice: sellerAdsListSlice,
    sort: toggleReducer,
    filterStatus: filterStatusReducer,
    favoriteListSlice: favoriteListSlice,
    phone: phoneReducer,
    otp: otpReducer,
    home: homeReducer,
    adsLinks: adsLinksReducer,
    adsData: adsDataReducer,
    adsDetails: adsDetailReducer,
    similarAds: similarAdsReducer,
    recentComments: recentCommentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
