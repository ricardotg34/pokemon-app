import { Stack, Paper, LinearProgress, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface FighterInfoProps {
  direction?: "left" | "right";
  active?: boolean;
  name: string;
  hp: number;
}

const FighterInfo = ({ direction = "left", active, name, hp }: FighterInfoProps) => {

  const [initialHP, setInitialHP] = useState(hp);

  useEffect(() => {
    setInitialHP(hp);
  }, [name])

  const hpPercent = hp/initialHP*100;

  return (
    <Stack spacing={2} direction={direction === "right" ? "row-reverse" : "row"}>
      <Paper elevation={3} sx={{ flex: 1, aspectRatio: active ? "1 / 1" : "unset" }} />
      {active ? (
        <Stack spacing={2} sx={{ flex: 15 }}>
          <LinearProgress variant="determinate" value={hpPercent} sx={{ height: 20, rotate: direction === "right" ? "180deg" : "unset" }} />
          <Typography variant="subtitle1" textAlign={direction} fontWeight="bolder">
            {name}
          </Typography>
        </Stack>
      ) : (
        <Typography flex={15} variant="subtitle1" textAlign={direction}  sx={{ textDecoration: hp === 0 ? "line-through" : "unset" }}>
          {name}
        </Typography>
      )}
    </Stack>
  );
};

export default FighterInfo;
