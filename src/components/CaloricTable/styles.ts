import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  headerCell: {},
  foodCellReadOnly: {
    width: 220,
  },
  foodCell: {
    width: 220,
    padding: 0,
    verticalAlign: "bottom",
  },
  weightCell: {
    padding: 0,
    verticalAlign: "bottom",
  },
  foodSelect: {
    marginRight: theme.spacing(1),
    marginBottom: -1,
  },
  weightInput: {
    maxWidth: 80,
    marginBottom: -1,
  },
}));
