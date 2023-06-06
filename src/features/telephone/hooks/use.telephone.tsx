import * as ac from "../redux/actions.creator";
import { AppDispatch, RootState } from "../../../core/store/store";
import { useDispatch, useSelector } from "react-redux";

export function useTelephone() {
  const {} = useSelector((state: RootState) => state.telephone);
  const dispatch: AppDispatch = useDispatch();

  const handleHang = () => {
    dispatch(ac.updateCallingTelephoneAction(false));
  };

  const handleCall = () => {
    dispatch(ac.updateCallingTelephoneAction);
  };

  const displayNumber = () => {
    dispatch(ac.updateDisplayTelephoneAction);
  };

  const deleteNumber = () => {
    dispatch(ac.deleteDisplayTelephoneAction);
  };

  return {
    telephone,
    handleCall,
    handleHang,
    displayNumber,
    deleteNumber,
  };
}
