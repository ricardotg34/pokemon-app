import type { Battle } from "./battle.interface";

export enum CurrentPage {
  LANDING,
  SELECT_TEAM,
  BATTLE
}

export interface AppState {
  currentPage: CurrentPage,
  playerName?: string,
  lobbyId?: string,
  battleState?: Battle
}
