"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  id: "",
  role:"",
  name:""
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setLogin: (state, actions) => {
      const { message, ...userData } = actions.payload;

      return {
        ...state,
        ...userData,
      };
    },

    setLogout:  (state, actions) => {
      return {
        ...initialState
      }
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
