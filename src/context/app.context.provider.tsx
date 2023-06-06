import { UseTelephone } from "../hooks/use.telephone";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    telephoneContext: UseTelephone(),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
