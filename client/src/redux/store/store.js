"use client"

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../reducerslice/userSlice";
import logger from "redux-logger";

const reducer = combineReducers({

    nameManash: userSlice,
});

const store = configureStore({

    reducer,
    middleware:[logger]
})

export default store