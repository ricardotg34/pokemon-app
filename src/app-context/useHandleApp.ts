import { useReducer } from "react";
import { AppActions, appReducer } from "./app.reducer";
import { CurrentPage } from "../domain/interfaces/app-state.interface";

export const useHandleApp = () => {
  const [state, dispatch] = useReducer(appReducer, {
    currentPage: CurrentPage.LANDING
  });

  const setCurrentPage = (currentPage: CurrentPage) => {
    dispatch({
      type: AppActions.SET_CURRENT_PAGE,
      payload: { currentPage }
    })
   }
  
   const setPlayerName = (playerName: string) => {
    dispatch({
      type: AppActions.SET_PLAYER_NAME,
      payload: { playerName }
    })
   }

  return {
    state,
    setCurrentPage,
    setPlayerName
  }
}