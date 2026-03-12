import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Alert } from "@mui/material";


interface Props {
  description: string;
  error?: string;
  fieldLabel?: string;
  fieldName: string;
  onClose: () => void;
  onFormAction: (formData: FormData) => void | Promise<void>
  open: boolean;
  title: string;
}

const LandingDialog = (props: Props) => {

  return (
     <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="md">
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.description}
            </DialogContentText>
            <form action={props.onFormAction} id="subscription-form">
              <TextField
                autoFocus
                fullWidth
                id={props.fieldName}
                label={props.fieldLabel}
                margin="normal"
                name={props.fieldName}
                required
                type="text"
              />
            </form>
            { props.error ? <Alert severity="error">{props.error}</Alert> : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button type="submit" form="subscription-form" variant="contained" color="primary">
              Connect
            </Button>
          </DialogActions>
        </Dialog>
  )
}

export default LandingDialog