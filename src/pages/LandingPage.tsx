import { useContext, useState } from "react";
import { Stack, Typography, Skeleton, Button } from "@mui/material";
import { BattleService } from "../services/battle.service";
import LandingDialog from "../components/LandingDialog";
import { isAxiosError } from "axios";
import { AppContext } from "../app-context/app-context";
import { CurrentPage } from "../domain/interfaces/app-state.interface";

const LandingPage = () => {
  const { setCurrentPage, setPlayerName, setSocketConnection, setBattleStatus, setBattleState } = useContext(AppContext)
  const [openConnectServerDialog, setOpenConnectServerDialog] = useState(false);
  const [openJoinLobbyDialog, setOpenJoinLobbyDialog] = useState(false);
  const [isServerConnected, setServerConnected] = useState(false);
  const [dialogError, setDialogError] = useState<string>();

  const handleButton = async () => {
    if(!isServerConnected) setOpenConnectServerDialog(true);
    else setOpenJoinLobbyDialog(true);
  };

  const handleCloseConnectServer = () => {
    setOpenConnectServerDialog(false);
    setDialogError(undefined);
  };
  
  const handleCloseJoinLobby = () => {
    setOpenJoinLobbyDialog(false);
    setDialogError(undefined);
  };

  const handleJoinLobbyAction = async (formData: FormData) => {
    const nickname = formData.get("nickname");
    try {
      const data = await BattleService.instance.joinLobby(nickname!.toString());
      console.log(data);
      setDialogError(undefined);
      handleCloseJoinLobby();
      setPlayerName(nickname!.toString())
      setCurrentPage(CurrentPage.SELECT_TEAM);
    } catch (error) {
      if(isAxiosError(error)) setDialogError(error.response?.data.error); 
      else setDialogError("Unable to join the lobby");
    }
  }

  const handleAction = async (formData: FormData) => {
    const serverUrl = formData.get("server-url");
    console.log(serverUrl)
    try {
      const url = new URL(serverUrl!.toString());
      await BattleService.instance.connectToServer(url.toString());
      BattleService.url = url.toString();
      setSocketConnection(url.toString(), setBattleState, setBattleStatus)
      setServerConnected(true);
      setDialogError(undefined);
      handleCloseConnectServer();
    } catch (error) {
      console.log(error)
      if(error instanceof TypeError) setDialogError("Type a valid URL");
      else setDialogError("Unable to connect the server.");
    }
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
        <Button
          color="primary"
          fullWidth
          onClick={handleButton}
          size="large"
          variant="contained"
        >
          {isServerConnected ? "Join Lobby" : "Connect to the Server"}
        </Button>
        <LandingDialog
          description="To start playing, please enter the server's url."
          error={dialogError}
          fieldLabel="Server URL"
          fieldName="server-url"
          onClose={handleCloseConnectServer}
          onFormAction={handleAction}
          open={openConnectServerDialog}
          title="Connect to server"
        />
        
        <LandingDialog
          description="Please, type your nickname."
          error={dialogError}
          fieldLabel="Nickname"
          fieldName="nickname"
          onClose={handleCloseJoinLobby}
          onFormAction={handleJoinLobbyAction}
          open={openJoinLobbyDialog}
          title="Join Lobby"
        />
      </Stack>
    </>
  );
};

export default LandingPage;
