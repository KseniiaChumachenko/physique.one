import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    container: {
      display: "flex",
      width: "100%",
      height: "100vh",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
    section: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
      },
    },
    coloredSection: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      color: "white",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
      },
    },
    buttonOverride: {
      color: "white",
      borderColor: "white",
      marginTop: theme.spacing(3),
    },

    // Login form
    loginRoot: {
      margin: `${theme.spacing(15)}px auto`,
      width: 360,
    },
    credentials: {
      display: "flex",
      flexDirection: "column",
    },
    textFields: {
      marginBottom: theme.spacing(2),
    },
    buttonBlock: {
      width: "100%",
    },
    buttonsRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    facebookButton: {
      background: theme.palette.primary.main,
      color: "white",
      border: "none",
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      fontWeight: 500,
      width: "100%",
    },
  })
);
