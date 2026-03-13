import type { Action } from "../../domain/interfaces/action.interface";
import type { AppState, CurrentPage } from "../../domain/interfaces/app-state.interface";
import type { Battle, BattleStatus, PlayerItem } from "../../domain/interfaces/battle.interface";

export enum Actions {
  SET_LOBBY_ID,
  SET_PLAYER_NAME,
  SET_CURRENT_PAGE,
  SET_BATTLE_STATE,
  SET_BATTLE_STATUS,
  SET_TURN_RESULT,
}

type SetLobbyID = Action<string, Actions.SET_LOBBY_ID>
type SetPlayerName = Action<string, Actions.SET_PLAYER_NAME>
type SetCurrentPage = Action<CurrentPage, Actions.SET_CURRENT_PAGE>
type SetBattleState = Action<Battle, Actions.SET_BATTLE_STATE>
type SetBattleStatus = Action<{status: BattleStatus, turn: number}, Actions.SET_BATTLE_STATUS>
type SetTurnResult = Action<{turn: number, players: [PlayerItem, PlayerItem]}, Actions.SET_TURN_RESULT>

type AppActions = SetPlayerName | SetCurrentPage | SetBattleState | SetBattleStatus | SetTurnResult | SetLobbyID


export const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case Actions.SET_LOBBY_ID:
      return {
        ...state,
        lobbyId: action.payload
      }
    case Actions.SET_PLAYER_NAME:
      return {
        ...state,
        playerName: action.payload,
      };
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case Actions.SET_BATTLE_STATE:
      return {
        ...state,
        battleState: action.payload,
      };
    case Actions.SET_BATTLE_STATUS:
      return {
        ...state,
        battleState: {
          ...state.battleState!,
          status: action.payload.status,
          turn: action.payload.turn
        }
      }
    case Actions.SET_TURN_RESULT:
      return {
        ...state,
        battleState:{
          ...state.battleState!,
          turn: action.payload.turn,
          players: action.payload.players
        }
      }
    default:
      return state;
  }
};
