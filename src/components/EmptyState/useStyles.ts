import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    padding: theme.spacing(2),
  },

  illustration: {
    width: "30%",
    height: "60%",
  },
  action: {
    margin: theme.spacing(2),
  },
}));
