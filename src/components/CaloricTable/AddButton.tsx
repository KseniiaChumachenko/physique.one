import React from "react";
import { t } from "@lingui/macro";
import { Button } from "@material-ui/core";
import { Props } from "./index";

export const AddButton = ({ onAddItem }: Pick<Props, "onAddItem">) => {
  return (
    <Button
      variant={"text"}
      onClick={onAddItem}
      size={"large"}
      color={"primary"}
      fullWidth={true}
    >
      {t` + Add ingredient`}
    </Button>
  );
};
