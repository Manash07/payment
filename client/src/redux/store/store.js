"use client"

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../reducerslice/userSlice";
import kycSlice from "../reducerslice/kycSlice";
import logger from "redux-logger";
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';


const reducer = combineReducers({

    nameManash: userSlice,
    kycForm: kycSlice
});

const persistConfig = {
    key: 'root',
    storage: storageSession,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({

    reducer: persistedReducer,
    middleware:[logger]
})

export const persistor = persistStore(store)