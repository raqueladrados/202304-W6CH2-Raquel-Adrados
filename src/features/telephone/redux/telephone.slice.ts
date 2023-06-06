import { createSlice } from "@reduxjs/toolkit";

export type TelephoneState = {
  isCalling: boolean;
  telephoneNumbers: string;
};

const initialState: TelephoneState = {
  isCalling: false,
  telephoneNumbers: "",
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
