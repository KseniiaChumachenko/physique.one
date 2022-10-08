import { makeStyles } from "@material-ui/core/styles";

const foodNameCellWidth = 200;

export const useStyles = makeStyles((theme) => ({
  headerCell: {},
  foodCellReadOnly: {
    minWidth: foodNameCellWidth,
  },
  foodCell: {
    minWidth: foodNameCellWidth,
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
