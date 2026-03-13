import { Stack, Typography } from "@mui/material";
import FighterInfo from "./FighterInfo";
import type { PokemonTeamProp } from "../domain/interfaces/pokemon-tean-prop.interface";

type PokemonTeamItemProp = PokemonTeamProp & {
  hp?: number;
};

interface TeamInfoProps {
  direction?: "left" | "right";
  trainerName: string;
  pokemonTeam: [PokemonTeamItemProp, PokemonTeamItemProp, PokemonTeamItemProp];
  activeFighter: number;
}

const TeamInfo = ({
  direction = "left",
  trainerName,
  pokemonTeam,
  activeFighter,
}: TeamInfoProps) => {
  const activePokemon = pokemonTeam[activeFighter];
  

  const sortedTeam = [...pokemonTeam].sort((a, b) => {
    if (a.name === activePokemon.name) return -1;
    if (b.name === activePokemon.name) return 1;

    if(a.hp === 0) return 1;
    if(b.hp === 0) return -1;
    return 0;
  });

  return (
    <Stack spacing={1}>
      <Typography variant="h4" textAlign={direction}>
        {trainerName}
      </Typography>
      {sortedTeam.map((p) => (
        <FighterInfo
          direction={direction}
          name={p?.name!}
          active={p.name === activePokemon.name}
          hp={p.hp!}
        />
      ))}
    </Stack>
  );
};

export default TeamInfo;
