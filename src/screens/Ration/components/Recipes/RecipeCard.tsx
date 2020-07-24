import React from "react";
import {
  Card,
  CardContent,
  createStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Recipe_Item } from "../../../../graphql/generated/graphql";
import { RecipeCardHeader, RecipeCardHeaderProps } from "./RecipeCardHeader";
import { RecipeTableEditableRow } from "./RecipeTableEditableRow";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      overflow: "auto",
    },
    addButton: {
      width: "100%",
    },
  })
);

interface Props extends RecipeCardHeaderProps {
  recipe_items?: Recipe_Item[] | null;
}

export const RecipeCard = ({
  id,
  name,
  description,
  recipe_items,
  recipe_items_aggregate,
}: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <RecipeCardHeader
        id={id}
        recipe_items_aggregate={recipe_items_aggregate}
        description={description}
        name={name}
      />
      <CardContent>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell>Weight&nbsp;(g)</TableCell>
              <TableCell>Calories&nbsp;|&nbsp;kJ</TableCell>
              <TableCell>Protein&nbsp;(g)</TableCell>
              <TableCell>Carbohydrate&nbsp;(g)</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipe_items?.map((row, key) => (
              <RecipeTableEditableRow
                recipe_id={id}
                row={row}
                key={key}
                mode={"regularRow"}
              />
            ))}
            <RecipeTableEditableRow recipe_id={id} row={{}} mode={"add"} />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
