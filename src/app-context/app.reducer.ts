import type { Action } from "../domain/interfaces/action.interface";
import type { AppState } from "../domain/interfaces/app-state.interface";

export enum AppActions {
  SET_PLAYER_NAME,
  SET_CURRENT_PAGE,
  SET_BATTLE_STATE,
  SET_BATTLE_STATUS,
}

export const appReducer = (state: AppState, action: Action<AppActions>): AppState => {
  switch (action.type) {
    case AppActions.SET_PLAYER_NAME:
      return {
        ...state,
        playerName: action.payload.playerName,
      };
    case AppActions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    case AppActions.SET_BATTLE_STATE:
      return {
        ...state,
        battleState: action.payload.battleState,
      };
    case AppActions.SET_BATTLE_STATUS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        battleState: {
          ...state.battleState!,
          status: action.payload.status
        }
      }
    default:
      return state;
  }
};
