import { createContext } from "react";
import { UseTelephone } from "../hooks/use.telephone";

export type ContextStructure = {
  telephoneContext: ReturnType<typeof UseTelephone>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
