"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  documentType:"",
  documentNumber:"",
  documentIssuedOffice:"",
  bankName: "",
  bankLocation: "",
  bankBranch:"",
  bankAccount:"",
  status:"",
};

const kycSlice = createSlice({
  name: "KYC",
  initialState,
  reducers: {
    setForm: (state, actions) => {
        console.log(actions.payload)
        const { msg, ...userData } = actions.payload;

      return {
        ...state,
        ...userData,
      };
    },
  },
});

export const { setForm } = kycSlice.actions;
export default kycSlice.reducer;
