import { Grid, Typography } from '@mui/material'
import PlayerSelection from '../components/PlayerSelection'

const SelectTeamPage = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid size={5}>
          <PlayerSelection playerName="Player 1" />
        </Grid>
        <Grid size={2} display="flex" justifyContent="center">
          <Typography variant="h4" gutterBottom>
            VS
          </Typography>
        </Grid>
        <Grid size={5}>
          <PlayerSelection playerName="Player 2" direction='right' type='opponent' />
        </Grid>
      </Grid>
    </>
  )
}

export default SelectTeamPage