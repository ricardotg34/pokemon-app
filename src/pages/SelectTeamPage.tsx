import { Grid, Typography } from "@mui/material";
import PlayerSelection from "../components/PlayerSelection";
import { useContext } from "react";
import { AppContext } from "../contexts/app-context/app-context";
import { BattleService } from "../services/battle.service";

const SelectTeamPage = () => {
  const { state } = useContext(AppContext);

  const player1 = state.battleState?.players[0];
  const player2 = state.battleState?.players[1];

  const handleSelectTeam = () => {
    BattleService.instance.assignTeam(state.lobbyId!, state.playerName!);
  };

  const handleReady = () => {
    BattleService.instance.playerReady(state.lobbyId!, state.playerName!);
  };

  return (
    <>
      <Grid
        container
        minWidth={1200}
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid size={5}>
          <PlayerSelection
            type={player1?.name === state.playerName ? "own" : "opponent"}
            playerName={player1?.name ?? ""}
            pokemonTeam={player1?.pokemonTeam}
            onSelectTeam={player1?.name === state.playerName ? handleSelectTeam : undefined}
            onReady={player1?.name === state.playerName ? handleReady : undefined}
            ready={player1?.ready}
          />
        </Grid>
        <Grid size={2} display="flex" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            VS
          </Typography>
        </Grid>
        <Grid size={5}>
          <PlayerSelection
            type={player2?.name === state.playerName ? "own" : "opponent"}
            playerName={player2?.name ?? ""}
            pokemonTeam={player2?.pokemonTeam}
            onSelectTeam={player2?.name === state.playerName ? handleSelectTeam : undefined}
            onReady={player2?.name === state.playerName ? handleReady : undefined}
            direction="right"
            ready={player2?.ready}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectTeamPage;
