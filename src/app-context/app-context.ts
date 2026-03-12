import { createContext } from "react";
import type { useHandleApp } from "./useHandleApp";
import { CurrentPage } from "../domain/interfaces/app-state.interface";

type AppContextType = ReturnType<typeof useHandleApp>

export const AppContext = createContext<AppContextType>({
  state: { currentPage: CurrentPage.LANDING },
  setCurrentPage: () => {},
  setPlayerName: () => {}
})