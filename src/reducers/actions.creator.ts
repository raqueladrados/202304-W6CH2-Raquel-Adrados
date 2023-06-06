import { Telephone } from "../models/phone.model";
import { actionTypes } from "../reducers/actions.types";

type Keys = keyof typeof actionTypes;

export type TelephoneAction = {
  type: (typeof actionTypes)[Keys];
  payload: string | boolean | Telephone;
};

export function updateDisplayTelephoneAction(
  payload: Telephone
): TelephoneAction {
  return {
    type: actionTypes.updateDisplay,
    payload,
  };
}

//no es necesario un payload en este caso ya que solo hay un display no varios
//por lo que es obvio que si pedimos que se borre será ese y es innecesario un payload
export function deleteDisplayAction(payload: Telephone): TelephoneAction {
  return {
    type: actionTypes.deleteDisplay,
    payload,
  };
}

// el paylaod en este caso tambien podría ser opcional porque le estamos pasando un boolean que va a ser A o B o bien tipar directamente el payload como boolean
export function updateCallingAction(payload: Telephone): TelephoneAction {
  return {
    type: actionTypes.updateCalling,
    payload,
  };
}
