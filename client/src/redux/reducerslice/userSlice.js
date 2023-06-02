"use client";

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
   
    setRegister: (state, actions) => {
      console.log(actions.payload)
      const { ...userData } = actions.payload;

      return {
       
        ...userData
      };
    },
  },
});

export const { setRegister } = userSlice.actions;
export default userSlice.reducer;
