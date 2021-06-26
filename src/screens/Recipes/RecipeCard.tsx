import React, { useState } from "react";
import {
  Button,
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
import { Trans } from "@lingui/react";
import { Recipe_Item } from "../../graphql/generated/graphql";
import { useStore } from "../../store";
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
  u_id,
  description,
  recipe_items,
  recipe_items_aggregate,
}: Props) => {
  const classes = useStyles();
  const {
    userStore: {
      user: { id: userId },
    },
  } = useStore();

  const [withAddRow, setWithAddRow] = useState(false);
  const handleResetAddRow = () => setWithAddRow(false);

  const isPermitted = userId === u_id;

  return (
    <Card className={classes.root}>
      <RecipeCardHeader
        id={id}
        recipe_items_aggregate={recipe_items_aggregate}
        description={description}
        name={name}
        u_id={u_id}
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
            {recipe_items?.map((row) => (
              <RecipeTableEditableRow
                recipe_id={id}
                row={row}
                key={row.id}
                mode={"regularRow"}
                u_id={u_id}
                onClickOutside={handleResetAddRow}
              />
            ))}
            {withAddRow && isPermitted && (
              <RecipeTableEditableRow
                key={id}
                recipe_id={id}
                row={{}}
                mode={"add"}
                u_id={u_id}
                onClickOutside={handleResetAddRow}
              />
            )}
          </TableBody>
        </Table>
        {!withAddRow && (
          <Button
            variant={"text"}
            onClick={() => setWithAddRow(true)}
            size={"large"}
            color={"primary"}
            className={classes.addButton}
          >
            <Trans> + Add ingredient</Trans>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
