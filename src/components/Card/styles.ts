import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 330,
  },
  tileImg: {
    height: 120,
    backgroundSize: "contain",
    backgroundPosition: "left",
  },
  nameContainer: {
    display: "flex",
  },
  textField: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));
