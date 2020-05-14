import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import { SnackbarProps } from "@material-ui/core/Snackbar/Snackbar";

type JointProps = AlertProps & SnackbarProps;

interface Props extends JointProps {}

export const ToastMessage = ({ children, severity }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) =>
    setOpen(false);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={severity} onClose={handleClose}>
        {children}
      </Alert>
    </Snackbar>
  );
};
