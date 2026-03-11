import { Skeleton } from "@mui/material";

interface FighterChooseItemProps {
  height: number;
  direction?: "left" | "right";
  imageUrl?: string; // Optional image URL for the fighter
  name?: string; // Optional name of the fighter
  // Define any props if needed
}

const FighterChooseItem = ({ direction = 'left', ...props}: FighterChooseItemProps) => {
  return (
    <Skeleton
      variant="rectangular"
      height={400}
      sx={{
        flex: 1,
        maxWidth: "none",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        position: "relative",
        [direction]: 0,
      }}
    >
      {props.name}
    </Skeleton>
  );
};

export default FighterChooseItem;
