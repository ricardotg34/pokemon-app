import { Alert, Button, Box, Stack, Typography } from "@mui/material";
import FighterChooseItem from "./FighterChooseItem";

interface PlayerSelectionProps {
  direction?: "left" | "right";
  playerName: string;
  type?: 'own' | 'opponent'

}

const PlayerSelection = ({ direction = 'left', playerName, type = 'own'}: PlayerSelectionProps) => {
  return (
    <Stack spacing={2} minWidth={400} sx={{ transform: `skew(${direction === "left" ? 10 : -10}deg)` }}>
      <Typography variant="h2" gutterBottom display="flex" justifyContent={ direction === "right" ? "end" : "start" }>
        {playerName}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <FighterChooseItem height={400} direction={direction} name="Hola" />
        <FighterChooseItem height={400} direction={direction} />
        <FighterChooseItem height={400} direction={direction} />
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {type === 'own' ? (
          <>
            <Button sx={{ flex: 1 }} variant="contained" color="primary" fullWidth>
              Select Team
            </Button>
            <Button sx={{ flex: 1 }} variant="contained" color="primary" fullWidth>
              Ready
            </Button>
          </>

        ) : (
          <Alert sx={{ flex: 1 }} variant="filled" severity="warning">
            Waiting for fighter to be ready...
          </Alert>
        )}
      </Box>
    </Stack>
  );
};

export default PlayerSelection;
