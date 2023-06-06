import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sliceTelephone from "../../features/telephone/redux/telephone.slice";

export const store = configureStore({
  reducer: {
    telephone: sliceTelephone,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
