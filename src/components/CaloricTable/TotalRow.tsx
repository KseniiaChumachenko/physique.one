import React from "react";
import { t } from "@lingui/macro";
import { TableCell, TableRow, Typography } from "@material-ui/core";
import {
  aggregate,
  getValueByPortionCoefficient,
} from "src/screens/Recipes/utils";
import { useIsMobile } from "src/hooks/useIsMobile";
import { Props } from "./index";

const WEIGHT_KEY = ["weight"];

const ENERGY_KEYS = ["energy_cal", "energy_kj"];

const MACROS_KEYS = ["proteins", "carbohydrates", "fats"];

export const TotalRow = ({
  data,
  coefficientForPortions,
}: Pick<Props, "data"> & { coefficientForPortions: number }) => {
  const isMobile = useIsMobile();

  const weightValue = WEIGHT_KEY.map((k) =>
    getValueByPortionCoefficient(
      aggregate(data as any, k),
      coefficientForPortions
    )
  );

  const energyValues = ENERGY_KEYS.map((k) =>
    getValueByPortionCoefficient(
      aggregate(data as any, k),
      coefficientForPortions
    )
  );

  const macrosValues = MACROS_KEYS.map((k) =>
    getValueByPortionCoefficient(
      aggregate(data as any, k),
      coefficientForPortions
    )
  );

  return (
    <TableRow>
      <TableCell>
        <Typography variant={"button"} color={"textSecondary"}>
          {t`TOTAL`}
        </Typography>
      </TableCell>
      {WEIGHT_KEY.map((k, i) => (
        <TableCell key={i}>
          <Typography variant={"button"} color={"textSecondary"}>
            {weightValue[i]}
          </Typography>
        </TableCell>
      ))}
      <TableCell>
        <Typography variant={"button"} color={"textSecondary"}>
          {energyValues[0]}
          &nbsp;kCal |&nbsp;
          {energyValues[1]}
          &nbsp;kJ
        </Typography>
      </TableCell>

      {!isMobile &&
        MACROS_KEYS.map((k, i) => (
          <TableCell key={i} align={"right"}>
            <Typography variant={"button"} color={"textSecondary"}>
              {macrosValues[i]}
            </Typography>
          </TableCell>
        ))}
    </TableRow>
  );
};
