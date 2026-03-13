import { Alert, Button, Box, Stack, Typography, CircularProgress, Container } from "@mui/material";
import FighterChooseItem from "./FighterChooseItem";
import type { PokemonTeamItemProp } from "../domain/interfaces/pokemon-tean-prop.interface";


interface PlayerSelectionProps {
  direction?: "left" | "right";
  playerName: string;
  type?: "own" | "opponent";
  pokemonTeam?: PokemonTeamItemProp[];
  onSelectTeam?: () => void;
  onReady?: () => void;
  ready?: boolean;
}

const PlayerSelection = ({
  direction = "left",
  playerName,
  type = "own",
  pokemonTeam,
  onSelectTeam: handleSelectTeam,
  onReady: handleReady,
  ready,
}: PlayerSelectionProps) => {
  return playerName ? (
    <Stack
      spacing={2}
      minWidth={400}
      sx={{ transform: `skew(${direction === "left" ? 10 : -10}deg)` }}
    >
      <Typography
        variant="h2"
        gutterBottom
        display="flex"
        justifyContent={direction === "right" ? "end" : "start"}
      >
        {playerName}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <FighterChooseItem height={400} direction={direction} name={pokemonTeam?.[0]?.name} />
        <FighterChooseItem height={400} direction={direction} name={pokemonTeam?.[1]?.name} />
        <FighterChooseItem height={400} direction={direction} name={pokemonTeam?.[2]?.name} />
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {type === "own" && !ready ? (
          <>
            <Button
              sx={{ flex: 1 }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSelectTeam}
            >
              Select Team
            </Button>
            <Button
              sx={{ flex: 1 }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleReady}
              disabled={!pokemonTeam || pokemonTeam.length !== 3}
            >
              Ready
            </Button>
          </>
        ) : (
          <Alert sx={{ flex: 1 }} variant="filled" severity={ready ? "success" : "warning"}>
            {ready ? "Ready to fight!" : "Waiting for fighter to be ready..."}
          </Alert>
        )}
      </Box>
    </Stack>
  ) : (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        transform: `skew(${direction === "left" ? 10 : -10}deg)`,
      }}
    >
      <Typography variant="h6">Waiting for opponent...</Typography>
      <CircularProgress size="3rem" />
    </Container>
  );
};

export default PlayerSelection;
