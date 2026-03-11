import { Button, Grid, Paper } from "@mui/material"
import TeamInfo from "../components/TeamInfo"


const FightPage = () => {
  return (
    <Grid container width="100vw" spacing={6} padding={2}>
      <Grid size={6}>
        <TeamInfo />
      </Grid>
      <Grid size={6}>
        <TeamInfo direction="right" />
      </Grid>
      <Grid size={6} display="flex" justifyContent="center">
        <Paper elevation={3} sx={{ height: 400, aspectRatio: "1 / 1" }}  />
      </Grid>
      <Grid size={6}  display="flex" justifyContent="center">
        <Paper elevation={3} sx={{ height: 400, aspectRatio: "1 / 1" }} />
      </Grid>
      <Grid size={6}  display="flex" justifyContent="center" >
        <Button variant="contained" color="primary"size="large"  >
          Hit
        </Button>
      </Grid>
    </Grid>
  )
}

export default FightPage