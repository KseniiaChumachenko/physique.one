import { Table, TableBody } from "@material-ui/core";
import React from "react";
import { getRowValues } from "src/screens/Recipes/utils";
import { RecipesPreloadedHookProps } from "src/api-hooks/recipes";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import { Header } from "./Header";
import { Row, RowData } from "./Row";
import { TotalRow } from "./TotalRow";
import { AddButton } from "./AddButton";

type ExtendProps = RecipesPreloadedHookProps & FoodPreloadedHookProps;

export interface Props extends ExtendProps {
  data: Array<RowData>;
  isEditable: boolean;
  withRecipes?: boolean;
  withTotalRow?: boolean;
  onRemoveRow(id: string): void;
  onSubmitRowChange(data: Partial<RowData> & { id: string }): void;
  onAddItem(): void;
  /*only needed for recipes read view when number of portions changing*/
  portions?: number;
  displayPortions?: number;
}

export const CaloricTable = ({
  foodQR,
  recipesQR,
  isEditable,
  onRemoveRow,
  onSubmitRowChange,
  withRecipes = false,
  withTotalRow = true,
  onAddItem,
  portions = 1,
  displayPortions = 1,
  data = [],
}: Props) => {
  const {
    data: { food_connection },
  } = useFoodPreloadedQuery(foodQR);
  const coefficientForPortions =
    portions === displayPortions ? 1 : displayPortions / portions;

  const dataToPortions = data?.map((i) => {
    const foodById = food_connection.edges.find(
      ({ node }) => node.id === (i.food_id ?? food_connection?.edges[0].node.id)
    )!;

    return {
      ...i,
      ...getRowValues(foodById.node, i.weight, coefficientForPortions),
    };
  });

  return (
    <>
      <Table size="small" aria-label="a dense table">
        <Header isEditable={isEditable} />
        <TableBody>
          {dataToPortions?.map((row, i) => (
            <Row
              key={i}
              foodQR={foodQR}
              recipesQR={recipesQR}
              onSubmitRowChange={onSubmitRowChange}
              onRemoveRow={onRemoveRow}
              withRecipes={withRecipes}
              isEditable={isEditable}
              {...row}
            />
          ))}
          {withTotalRow && !isEditable && (
            <TotalRow
              data={data}
              coefficientForPortions={coefficientForPortions}
            />
          )}
        </TableBody>
      </Table>
      {isEditable && <AddButton onAddItem={onAddItem} />}
    </>
  );
};
