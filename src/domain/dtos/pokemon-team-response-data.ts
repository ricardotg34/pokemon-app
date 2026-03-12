
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

export interface PokemonListResponseDataDTO {
  pokemonTeam: [PokemonTeamItem, PokemonTeamItem, PokemonTeamItem]
}