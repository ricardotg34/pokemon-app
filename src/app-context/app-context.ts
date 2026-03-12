import { createContext } from "react";
import type { useHandleApp } from "./useHandleApp";
import { CurrentPage } from "../domain/interfaces/app-state.interface";
import type useWebSocket from "./useWebSocket";

type AppContextType = ReturnType<typeof useHandleApp> & ReturnType<typeof useWebSocket>

export const AppContext = createContext<AppContextType>({
  state: { currentPage: CurrentPage.LANDING },
  setCurrentPage: () => {},
  setPlayerName: () => {},
  isReady: false,
  setBattleStatus: () => {},
  setSocketConnection: () => {},
  ws: () => {}
})