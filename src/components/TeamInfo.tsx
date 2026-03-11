import { Stack } from "@mui/material";
import FighterInfo from "./FighterInfo";

interface TeamInfoProps{
  direction?: "left" | "right"  
}

const TeamInfo = ({direction = "left"}: TeamInfoProps) => {
  return (
    <Stack spacing={1}>
      <FighterInfo direction={direction} name="Pokemon 1" active />
      <FighterInfo direction={direction} name="Pokemon 2" />
      <FighterInfo direction={direction} name="Pokemon 3" />
    </Stack>
  );
}

export default TeamInfo