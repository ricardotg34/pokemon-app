import { useReducer } from "react";
import { AppActions, appReducer } from "./app.reducer";
import { CurrentPage } from "../domain/interfaces/app-state.interface";
import type { Battle } from "../domain/interfaces/battle.interface";

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
   
   const setBattleState = (battleState: Battle) => {
    dispatch({
      type: AppActions.SET_BATTLE_STATE,
      payload: { battleState }
    })
   }
   
   const setBattleStatus = (currentPage: CurrentPage, status: string) => {
    dispatch({
      type: AppActions.SET_BATTLE_STATUS,
      payload: { currentPage, status }
    })
   }

  return {
    state,
    setCurrentPage,
    setPlayerName,
    setBattleStatus,
    setBattleState
  }
}