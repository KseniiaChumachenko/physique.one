import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { Recipe_Item } from "../../graphql/generated/graphql";
import { useStore } from "../../store";
import { RecipeCardHeader, RecipeCardHeaderProps } from "./RecipeCardHeader";
import { RecipeTableEditableRow } from "./RecipeTableEditableRow";
import { getValueByPortionCoefficient } from "./utils";

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

// TODO recipe items remapped twice because of submit of adjustable rows and portioning
export const RecipeCard = ({
  id,
  name,
  u_id,
  description,
  recipe_items,
  recipe_items_aggregate,
  portions,
  link,
}: Props) => {
  const classes = useStyles();
  const {
    userStore: {
      user: { id: userId },
    },
  } = useStore();

  const [displayPortions, setDisplayPortions] = useState(portions || 1);

  const [withAddRow, setWithAddRow] = useState(false);
  const handleResetAddRow = () => setWithAddRow(false);

  const isPermitted = userId === u_id;
  const coefficientForPortions =
    portions === displayPortions ? 1 : displayPortions / (portions || 1);

  return (
    <Card className={classes.root}>
      <RecipeCardHeader
        id={id}
        description={description}
        name={name}
        u_id={u_id}
        portions={portions}
        link={link}
      />
      <CardContent>
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant={"subtitle2"}>
            <Trans>Portions: </Trans>
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            marginBottom={2}
            width={"60%"}
          >
            <Slider
              defaultValue={displayPortions}
              value={displayPortions}
              step={0.5}
              max={50}
              valueLabelFormat={(v) => v}
              valueLabelDisplay="on"
              onChange={(e, v) => {
                setDisplayPortions(v as number);
              }}
            />
          </Box>
        </Box>
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
                coefficientForPortions={coefficientForPortions}
              />
            ))}
            {/*Row total for portions: */}
            {recipe_items && recipe_items?.length > 1 && (
              <TableRow>
                <TableCell>
                  <Typography variant={"button"} color={"textSecondary"}>
                    <Trans>TOTAL</Trans>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={"button"} color={"textSecondary"}>
                    {getValueByPortionCoefficient(
                      recipe_items_aggregate?.aggregate?.sum?.weight,
                      coefficientForPortions
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={"button"} color={"textSecondary"}>
                    {getValueByPortionCoefficient(
                      recipe_items_aggregate?.aggregate?.sum?.energy_cal,
                      coefficientForPortions
                    )}
                    &nbsp;kCal |&nbsp;
                    {getValueByPortionCoefficient(
                      recipe_items_aggregate?.aggregate?.sum?.energy_kj,
                      coefficientForPortions
                    )}
                    &nbsp;kJ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={"button"} color={"textSecondary"}>
                    {getValueByPortionCoefficient(
                      recipe_items_aggregate?.aggregate?.sum?.proteins,
                      coefficientForPortions
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={"button"} color={"textSecondary"}>
                    {getValueByPortionCoefficient(
                      recipe_items_aggregate?.aggregate?.sum?.carbohydrates,
                      coefficientForPortions
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={"button"} color={"textSecondary"}>
                    {getValueByPortionCoefficient(
                      recipe_items_aggregate?.aggregate?.sum?.fats,
                      coefficientForPortions
                    )}
                  </Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            )}
            {withAddRow && isPermitted && (
              <RecipeTableEditableRow
                key={id}
                recipe_id={id}
                row={{}}
                mode={"add"}
                u_id={u_id}
                onClickOutside={handleResetAddRow}
                coefficientForPortions={coefficientForPortions}
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
