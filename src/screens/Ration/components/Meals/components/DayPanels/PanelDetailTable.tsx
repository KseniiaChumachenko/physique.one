import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Food, Meal_Item } from "src/graphql/generated/graphql";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

type MealItemNodes = Array<
  { __typename?: "meal_item" } & Pick<Meal_Item, "id" | "weight"> & {
      foodDesc: { __typename?: "food" } & Pick<
        Food,
        | "id"
        | "name"
        | "energy_cal"
        | "energy_kj"
        | "carbohydrates"
        | "fats"
        | "proteins"
      >;
    }
>;

export const PanelDetailTable = ({ nodes }: { nodes: MealItemNodes }) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Calories&nbsp;|&nbsp;kJ</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Carbohydrate&nbsp;(g)</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Weight&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nodes.map((row, key) => (
            <TableRow key={key}>
              <TableCell
                component="th"
                scope="row"
                children={row.foodDesc.name}
              />
              <TableCell
                component="th"
                scope="row"
                children={
                  <>
                    {row.foodDesc.energy_cal}&nbsp;|&nbsp;
                    {row.foodDesc.energy_kj}
                  </>
                }
              />
              <TableCell
                component="th"
                scope="row"
                children={row.foodDesc.proteins}
              />

              <TableCell
                component="th"
                scope="row"
                children={row.foodDesc.carbohydrates}
              />

              <TableCell
                component="th"
                scope="row"
                children={row.foodDesc.fats}
              />

              <TableCell component="th" scope="row" children={row.weight} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
