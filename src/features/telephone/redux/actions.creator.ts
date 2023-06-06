import { Telephone } from "../models/phone.model";
import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions.types";

type Keys = keyof typeof actionTypes;

export type TelephoneAction = {
  type: (typeof actionTypes)[Keys];
  payload: string | boolean | Telephone;
};

export const updateDisplayTelephoneAction = createAction<string>(
  actionTypes.updateDisplay
);
export const deleteDisplayTelephoneAction = createAction<Telephone>(
  actionTypes.deleteDisplay
);
export const updateCallingTelephoneAction = createAction<boolean>(
  actionTypes.updateCalling
);
