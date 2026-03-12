import axios from "axios";
import type { ServerConectedDTO } from "../domain/dtos/server-connected.dto";
import type { JoinLobbyResDTO } from "../domain/dtos/join-lobby.dto";
import type { PokemonListResponseDataDTO } from "../domain/dtos/pokemon-team-response-data";
import type { SimpleDTO } from "../domain/dtos/simple.dto";
import type { Battle } from "../domain/interfaces/battle.interface";

export class BattleService {
  private static _instance: BattleService;
  private static _url: string;
  private static _socket: WebSocket;

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

  public static set url(url: string) {
    BattleService._url = url;
  }

  public get socket() {
    return BattleService._socket;
  }

  async connectToServer(url: string) {
    const response = await axios.get<ServerConectedDTO>(url + "health");

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
    const { data } = await axios.put<SimpleDTO>(BattleService._url + "api/battle/player_ready/", {
      lobbyId,
      playerName,
    });
    return data;
  }

  async attackMovement(lobbyId: string, playerName: string) {
    const { data } = await axios.post<SimpleDTO>(BattleService._url + "api/battle/attack_movement/", {
      lobbyId,
      playerName,
    });
    return data;
  }

  connectToWebSocket() {
    BattleService._socket = new WebSocket(`ws://${BattleService._url.replace("http://", "")}ws`);

    BattleService._socket.onclose = () => {
      setTimeout(this.connectToWebSocket, 1500);
    };

    BattleService._socket.onopen = () => {
      console.log("Connected");
    };
  }

  onListenWSLobbyStatus(callback: (data: Battle) => void) {
    BattleService._socket.onmessage = (event) => {
      console.log(event.data);
      const { type, payload } = JSON.parse(event.data);
      if (type !== "lobbyStatus") return;
      callback(payload);
    };
  }
}
