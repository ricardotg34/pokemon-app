import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper } from "@mui/material";
import TeamInfo from "../components/TeamInfo";
import { AppContext } from "../contexts/app-context/app-context";
import { useContext, useEffect, useState } from "react";
import { BattleService } from "../services/battle.service";
import { CurrentPage } from "../domain/interfaces/app-state.interface";

const FightPage = () => {
  const { state, setCurrentPage } = useContext(AppContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [playerResult, setPlayerResult] = useState<"win" | "lose">()
  const i = state.battleState?.players.findIndex((p) => p?.name === state.playerName)

  const player1 = state.battleState?.players[0];
  const player2 = state.battleState?.players[1];

  useEffect(() => {
    if(state.battleState?.status === 'finished'){
      if(state.battleState?.players[i!]?.pokemonTeam.every((p) => p?.hp === 0)) setPlayerResult("lose")
      else setPlayerResult("win")
     
      handleClickOpen();
    }
  }, [state.battleState?.status])
  

  const handleHit = () => {
    try {
      BattleService.instance.attackMovement(state.lobbyId!, state.playerName!);
    } catch (error) {
      console.log(error)
    }
  }


  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setCurrentPage(CurrentPage.LANDING);
  };

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
      <Dialog
        open={openDialog}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"BATTLE END!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The battle has finished, you {playerResult}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="contained">
            Quit
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default FightPage;
