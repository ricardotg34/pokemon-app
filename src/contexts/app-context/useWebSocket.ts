import { useEffect, useRef, useState } from "react";
import type { Battle, BattleStatus, PlayerItem } from "../../domain/interfaces/battle.interface";
import { CurrentPage } from "../../domain/interfaces/app-state.interface";

const useWebSocket = () => {
  const [isReady, setIsReady] = useState(false);

  const ws = useRef<WebSocket | null>(null);

  const setSocketConnection = (
    url: string,
    lobbyStatusCallback: (data: Battle) => void,
    battleStartCallback: (currentPage: CurrentPage, turn: number, status: BattleStatus) => void,
    turnResultCallback: (turn: number, players: [PlayerItem, PlayerItem]) => void
  ) => {
    const socket = new WebSocket(`ws://${url.replace("http://", "")}ws`);

    socket.onopen = () => {
      console.log("Connected");
      setIsReady(true);
    };
    socket.onclose = () => {
      setIsReady(false);
    };
    socket.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data);
      if (type === "lobby_status") lobbyStatusCallback(payload);
      if (type === "battle_start") battleStartCallback( CurrentPage.BATTLE, payload.turn, payload.status );
      if (type === "turn_result") turnResultCallback( payload.turn, payload.players );
      if (type === "battle_end") battleStartCallback( CurrentPage.BATTLE, -1, payload );
    };

    ws.current = socket;
  };

  useEffect(() => {
    return () => {
      ws.current?.close();
    };
  }, []);

  // bind is needed to make sure `send` references correct `this`
  return {
    isReady,
    ws: ws.current?.send.bind(ws.current),
    setSocketConnection,
  };
};

export default useWebSocket;
