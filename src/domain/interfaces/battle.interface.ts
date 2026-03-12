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
type PlayerItem = Player | undefined;

export interface Player {
  name: string,
  pokemonTeam: [PokemonTeamItem, PokemonTeamItem, PokemonTeamItem],
  currentPokemon: number,
  ready: boolean
}

export interface Battle {
  lobby: string,
  players: [PlayerItem, PlayerItem],
  status: 'waiting' | 'ready' | 'battling' | 'finished',
  turn?: number

}