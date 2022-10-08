import React from "react";
import { t } from "@lingui/macro";
import { TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { useIsMobile } from "src/hooks/useIsMobile";
import { Props as BaseProps } from "./index";
import { useStyles } from "./styles";

type Props = Pick<BaseProps, "isEditable">;

export const Header = ({ isEditable }: Props) => {
  const isMobile = useIsMobile();
  const classes = useStyles();

  const HeaderCell = ({ text, align }: { text: string; align?: "right" }) => (
    <TableCell className={classes.headerCell} align={align}>
      <Typography
        className={classes.headerCell}
        noWrap={true}
        variant={"body2"}
      >
        {text}
      </Typography>
    </TableCell>
  );

  return (
    <TableHead>
      <TableRow>
        <HeaderCell text={t`Ingredient`} />
        <HeaderCell text={t`Weight (g)`} />
        <HeaderCell text={t`kCal | kJ`} />
        {!isMobile && (
          <>
            <HeaderCell align={"right"} text={t`Protein (g)`} />
            <HeaderCell align={"right"} text={t`Carbohydrate (g)`} />
            <HeaderCell align={"right"} text={t`Fat (g)`} />
            {isEditable && <HeaderCell align={"right"} text={t`Actions`} />}
          </>
        )}
      </TableRow>
    </TableHead>
  );
};
