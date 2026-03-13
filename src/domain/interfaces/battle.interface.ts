export interface PokemonState {
  id: number;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  defeated: boolean;
  speed: number
}

export type PokemonTeamItem = PokemonState | undefined;
export type PlayerItem = Player | undefined;

export interface Player {
  name: string,
  pokemonTeam: PokemonTeamItem[],
  currentPokemon: number,
  ready: boolean
}

export type BattleStatus = 'waiting' | 'ready' | 'battling' | 'finished'

export interface Battle {
  lobby: string,
  players: PlayerItem[],
  status: BattleStatus,
  turn?: number

}