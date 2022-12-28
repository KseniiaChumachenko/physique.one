import { Table, TableBody } from "@material-ui/core";
import React from "react";
import { RecipesPreloadedHookProps } from "src/api-hooks/recipes";
import {
  FoodPreloadedHookProps,
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
  const coefficientForPortions =
    portions === displayPortions ? 1 : displayPortions / portions;

  return (
    <>
      <Table size="small" aria-label="a dense table">
        <Header isEditable={isEditable} />
        <TableBody>
          {data?.map((row) => (
            <Row
              key={row.id}
              foodQR={foodQR}
              recipesQR={recipesQR}
              onSubmitRowChange={onSubmitRowChange}
              onRemoveRow={onRemoveRow}
              withRecipes={withRecipes}
              isEditable={isEditable}
              data={row}
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
