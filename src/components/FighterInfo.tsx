import { Stack, Paper, LinearProgress, Typography } from "@mui/material";

interface FighterInfoProps {
  direction?: "left" | "right";
  active?: boolean;
  name: string;
}

const FighterInfo = ({ direction = "left", active, name }: FighterInfoProps) => {
  return (
    <Stack spacing={2} direction={direction === "right" ? "row-reverse" : "row"}>
      <Paper elevation={3} sx={{ flex: 1, aspectRatio: active ? "1 / 1" : "unset" }} />
      {active ? (
        <Stack spacing={2} sx={{ flex: 15 }}>
          <LinearProgress variant="determinate" value={80} sx={{ height: 20, rotate: direction === "right" ? "180deg" : "unset" }} />
          <Typography variant="subtitle1" textAlign={direction}>
            {name}
          </Typography>
        </Stack>
      ) : (
        <Typography flex={15} variant="subtitle1" textAlign={direction}>
          {name}
        </Typography>
      )}
    </Stack>
  );
};

export default FighterInfo;
