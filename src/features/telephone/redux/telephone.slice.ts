import { Telephone } from "../models/phone.model";
import { createSlice } from "@reduxjs/toolkit";

export type TelephoneState = {
  telephone: Telephone[];
};

const initialState: TelephoneState = {
  telephone: [],
};

const sliceTelephone = createSlice({
  name: "telephone",
  initialState,
  reducers: {
    updateDisplay: (state, { payload }) => ({ ...state, telephone: payload }),
    deleteDisplay: (state, { payload }) => ({ ...state, telephone: payload }),
    updateCalling: (state, { payload }) => ({ ...state, telephone: payload }),
  },
});

export const ac = sliceTelephone.actions;
export default sliceTelephone.reducer;
