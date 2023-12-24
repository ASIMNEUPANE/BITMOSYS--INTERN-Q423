import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
  FLUSH,
  REHYDRATE,
} from "redux-persist";
import { autoMergeLevel2 } from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

import cryptoReducer from "./slices/cryptoSlice";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistUser = persistReducer(persistConfig, cryptoReducer);

export const store = configureStore({
  reducer: {
    crypto: persistUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PAUSE, PERSIST, REGISTER, PURGE, FLUSH, REHYDRATE],
      },
    }),
});

export const newStore = persistStore(store);
