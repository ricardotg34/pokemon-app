import { Stack, Typography } from "@mui/material";
import FighterInfo from "./FighterInfo";

interface TeamInfoProps {
  direction?: "left" | "right";
  trainerName: string;
}

const TeamInfo = ({ direction = "left", trainerName }: TeamInfoProps) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h4" textAlign={direction}>
        {trainerName}
      </Typography>
      <FighterInfo direction={direction} name="Pokemon 1" active />
      <FighterInfo direction={direction} name="Pokemon 2" />
      <FighterInfo direction={direction} name="Pokemon 3" />
    </Stack>
  );
};

export default TeamInfo;
