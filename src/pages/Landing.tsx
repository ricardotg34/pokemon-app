import { useState } from "react";
import {
  Stack,
  Typography,
  Skeleton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const Landing = () => {

  const [open, setOpen] = useState(false);
  const [textButton, setTextButton] = useState("Connect to a server")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const serverUrl = formJson["server-url"];
    console.log(serverUrl);
    setTextButton(`Join Lobby`);
    handleClose();
  };

  return (
    <>
      <Stack
        spacing={4}
        width="70%"
        height="100vh"
        sx={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        <Typography variant="h2" gutterBottom>
          Pokemon Stadium Lite
        </Typography>
        <Skeleton variant="rectangular" width="100%" height="50vh" />
        <Button variant="contained" color="primary" fullWidth onClick={handleClickOpen} size="large">
          {textButton}
        </Button>
        
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>Connect to server</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To start playing, please enter the server's url.
            </DialogContentText>
            <form onSubmit={handleSubmit} id="subscription-form">
              <TextField
                autoFocus
                required
                margin="normal"
                id="name"
                name="server-url"
                label="Server URL"
                type="text"
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" form="subscription-form" variant="contained" color="primary">
              Connect
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </>
  );
};

export default Landing;
