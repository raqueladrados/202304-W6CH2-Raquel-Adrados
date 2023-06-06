import { Telephone } from "../models/phone.model";
import { TelephoneAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

// export type TelephoneState = {
//   telephone: Telephone;
// };

//No es necesario un estado cuando se puede simplificar si existe un modelo pequeño
//opcional en este caso

export const telephoneReducer = (state: Telephone, action: TelephoneAction) => {
  let payload: string | boolean | Telephone;
  switch (action.type) {
    case actionTypes.updateDisplay:
      payload = action.payload;
      return { ...state, telephone: payload };

    case actionTypes.deleteDisplay:
      payload = action.payload;
      return { ...state, telephone: payload };

    case actionTypes.updateCalling:
      payload = action.payload;
      return { ...state, telephone: payload };

    default:
      return { ...state };
  }
};

//al payload del action ya le hemos tipado y dicho su tipo por lo que no es necesario volverle a decir que va a ser as...

//el default siempre hay que añadirlo, nos proporciona una nueva instancia del objeto al poner las llaves y puntitos
