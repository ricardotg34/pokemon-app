import { Button, Grid, Paper } from "@mui/material";
import TeamInfo from "../components/TeamInfo";
import { AppContext } from "../contexts/app-context/app-context";
import { useContext } from "react";
import { BattleService } from "../services/battle.service";

const FightPage = () => {
  const { state } = useContext(AppContext);

  const player1 = state.battleState?.players[0];
  const player2 = state.battleState?.players[1];

  const handleHit = () => {
    try {
      const data = BattleService.instance.attackMovement(state.lobbyId!, state.playerName!);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  const i = state.battleState?.players.findIndex((p) => p?.name === state.playerName)



  return (
    <Grid container width="100vw" spacing={6} padding={2}>
      <Grid size={6}>
        <TeamInfo
          trainerName={player1?.name!}
          activeFighter={player1?.currentPokemon!}
          pokemonTeam={[
            player1?.pokemonTeam[0]!,
            player1?.pokemonTeam[1]!,
            player1?.pokemonTeam[2]!,
          ]}
        />
      </Grid>
      <Grid size={6}>
        <TeamInfo
          trainerName={player2?.name!}
          activeFighter={player2?.currentPokemon!}
          direction="right"
          pokemonTeam={[
            player2?.pokemonTeam[0]!,
            player2?.pokemonTeam[1]!,
            player2?.pokemonTeam[2]!,
          ]}
        />
      </Grid>
      <Grid size={6} display="flex" justifyContent="center">
        <Paper elevation={3} sx={{ height: 400, aspectRatio: "1 / 1" }} />
      </Grid>
      <Grid size={6} display="flex" justifyContent="center">
        <Paper elevation={3} sx={{ height: 400, aspectRatio: "1 / 1" }} />
      </Grid>
      <Grid size={6} display="flex" justifyContent="center" offset={i ? "auto" : undefined}>
        <Button variant="contained" color="primary" size="large" onClick={handleHit} disabled={i !== state.battleState?.turn}>
          Hit
        </Button>
      </Grid>
    </Grid>
  );
};

export default FightPage;
