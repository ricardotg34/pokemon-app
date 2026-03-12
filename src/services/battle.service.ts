import axios from "axios";
import type { ServerConectedDTO } from "../domain/dtos/server-connected.dto";
import type { JoinLobbyResDTO } from "../domain/dtos/join-lobby.dto";
import type { PokemonListResponseDataDTO } from "../domain/dtos/pokemon-team-response-data";
import type { SimpleDTO } from "../domain/dtos/simple.dto";

export class BattleService {
  private static _instance: BattleService;
  private static _url: string;

  private constructor() {}

  public static get instance(): BattleService {
    if (!BattleService._instance) {
      this.initPokemonService();
    }
    return BattleService._instance;
  }

  static initPokemonService(): BattleService {
    return (BattleService._instance = new BattleService());
  }

  public set url(url: string) {
    BattleService._url = url;
  }

  async connectToServer(url: string) {
    const response = await axios.get<ServerConectedDTO>(url+'health');

    return response.data;
  }

  async joinLobby(playerName: string) {
    const { data } = await axios.get<JoinLobbyResDTO>(
      BattleService._url + "api/battle/join_lobby/" + playerName,
    );
    return data;
  }

  async assignTeam(lobbyId: string, playerName: string) {
    const { data } = await axios.put<PokemonListResponseDataDTO>(
      BattleService._url + "api/battle/assign_pokemon/",
      {
        lobbyId,
        playerName,
      },
    );
    return data;
  }
  
  async playerReady(lobbyId: string, playerName: string) {
    const { data } = await axios.put<SimpleDTO>(
      BattleService._url + "api/battle/player_ready/",
      {
        lobbyId,
        playerName,
      },
    );
    return data;
  }
  
  async attackMovement(lobbyId: string, playerName: string) {
    const { data } = await axios.post<SimpleDTO>(
      BattleService._url + "api/battle/player_ready/",
      {
        lobbyId,
        playerName,
      },
    );
    return data;
  }
}
