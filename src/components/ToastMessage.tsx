import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import { SnackbarProps } from "@material-ui/core/Snackbar/Snackbar";

type JointProps = AlertProps & SnackbarProps;

interface Props extends JointProps {
  controledClose?(state: boolean): void;
}

export const ToastMessage = ({
  children,
  severity,
  open,
  controledClose,
}: Props) => {
  const [localOpen, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) =>
    setOpen(false);

  return (
    <Snackbar
      open={open ?? localOpen}
      autoHideDuration={6000}
      onClose={(controledClose as any) ?? handleClose}
    >
      <Alert
        severity={severity}
        onClose={(controledClose as any) ?? handleClose}
      >
        {children}
      </Alert>
    </Snackbar>
  );
};
