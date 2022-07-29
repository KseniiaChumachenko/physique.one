import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 900;

//TODO issue with mobile styles

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerMobile: {
    width: "100%",
    flexShrink: 0,
    overflow: "scroll",
  },
  drawerPaper: {
    width: drawerWidth,
    top: "unset",
    zIndex: theme.zIndex.appBar - 1,
    padding: theme.spacing(2),
  },
  drawerPaperMobile: {
    width: "100%",
    top: "unset",
    zIndex: theme.zIndex.appBar - 1,
    padding: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentDesktop: {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  addButton: {
    width: "100%",
  },

  sliderContainer: {
    display: "flex",
    alignItems: "center",
  },
  slider: {
    display: "flex",
    width: "60%",
    alignItems: "center",
    margin: theme.spacing(2),
  },
}));
