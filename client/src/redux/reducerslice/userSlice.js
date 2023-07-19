"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  id: "",
  role:"",
  name:"",
  phoneNumber:"",
  email:"",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setLogin: (state, actions) => {
      console.log(actions.payload);
      const { message, ...userData } = actions.payload;

      return {
        ...state,
        ...userData,
      };
    },

    setLogout:  () => {
      return {
        ...initialState
      }
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
