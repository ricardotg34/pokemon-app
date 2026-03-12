import { useReducer } from "react";
import { Actions, appReducer } from "./app.reducer";
import { CurrentPage } from "../../domain/interfaces/app-state.interface";
import type { Battle, BattleStatus, PlayerItem } from "../../domain/interfaces/battle.interface";

export const useHandleApp = () => {
  const [state, dispatch] = useReducer(appReducer, {
    currentPage: CurrentPage.LANDING
  });

  const setCurrentPage = (currentPage: CurrentPage) => {
    dispatch({
      type: Actions.SET_CURRENT_PAGE,
      payload: currentPage
    })
   }
  
   const setPlayerName = (playerName: string) => {
    dispatch({
      type: Actions.SET_PLAYER_NAME,
      payload: playerName
    })
   }
   
   const setBattleState = (battleState: Battle) => {
    dispatch({
      type: Actions.SET_BATTLE_STATE,
      payload: battleState
    })
   }
   
   const setBattleStatus = (currentPage: CurrentPage, turn: number, status: BattleStatus) => {
    dispatch({
      type: Actions.SET_BATTLE_STATUS,
      payload: { status, turn }
    });
     dispatch({
      type: Actions.SET_CURRENT_PAGE,
      payload: currentPage
    })

   }

   const setTurnRestult = (turn: number, players: [PlayerItem, PlayerItem]) => {
    dispatch({
      type: Actions.SET_TURN_RESULT,
      payload: { turn, players }
    })
   }

  return {
    state,
    setCurrentPage,
    setPlayerName,
    setBattleStatus,
    setBattleState,
    setTurnRestult
  }
}