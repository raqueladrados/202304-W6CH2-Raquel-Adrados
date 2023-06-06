import { Telephone } from "../models/phone.model";
import { telephoneReduce, TelephoneState } from "../../../reducers/reducer";
import { useReducer } from "react";
import * as ac from "../redux/actions.creator";

export function UseTelephone() {
  const initialState: TelephoneState = {
    telephone: {
      isCalling: false,
      display: "",
    },
  };

  const [telephoneState, dispatch] = useReducer(telephoneReducer, initialState);

  const hang = () => {
    dispatch(ac.updateCallingAction({ display: "", isCalling: false }));
  };
  const call = () => {
    dispatch(ac.updateCallingAction({ display: "", isCalling: true }));
  };
  const displayNumber = (phoneNumber: string) => {
    dispatch(
      ac.updateDisplayTelephoneAction({ display: phoneNumber, isCalling: true })
    );
  };
  const resetNumber = () => {};

  return {
    telephoneState,
    hang,
    call,
    displayNumber,
    resetNumber,
  };
}
