import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Trans, t } from "@lingui/macro";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddFoodMutation$variables,
  food_insert_input,
  UpdateFoodMutation$variables,
} from "src/api-hooks/food";
import { FoodBrandSelect } from "src/components/FoodBrandSelect";
import { FoodBrandPreloadedHookProps } from "src/api-hooks/foodBrand";
import {
  FoodTypePreloadedHookProps,
  useFoodTypePreloadedQuery,
} from "src/api-hooks/foodType";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { FetchedFoods } from "../../FoodLibrary";

type ExtendProps = FoodBrandPreloadedHookProps & FoodTypePreloadedHookProps;

interface Props extends ExtendProps {
  open: boolean;
  setOpen: any;

  onAdd?: (v: AddFoodMutation$variables) => void;
  onUpdate?: (v: UpdateFoodMutation$variables) => void;

  updateProps?: FetchedFoods;

  u_id: string;
}

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));

export const AddFoodDialog = ({
  foodBrandQR,
  foodTypeQR,

  open,
  setOpen,

  onAdd,
  onUpdate,

  updateProps,
  u_id,
}: Props) => {
  const classes = useStyles();
  const [variables, setVariables] = useState(updateProps);
  const { data } = useFoodTypePreloadedQuery(foodTypeQR);

  // Types, user id to submit variables, brand mutation and illuminate dead store
  const handleSetVariable = (value: any, key: string) =>
    setVariables((state) => ({ ...state, [key]: value }));

  const handleClose = (event: any) => {
    setOpen(false);
    event.stopPropagation();
  };

  const handleSubmit = () => {
    const id = variables?.id ? base64ToUuid(variables.id) : uuid();
    const type =
      variables?.type || data?.food_type_connection.edges[0].node.value;
    const brand_id = variables?.food_brand?.id
      ? base64ToUuid(variables?.food_brand?.id)
      : null;
    let vars;

    if (variables?.food_brand) {
      const { food_brand, ...rest } = variables;
      vars = { ...rest, brand_id, type, u_id };
    } else {
      vars = { ...variables, brand_id, type, u_id };
    }

    if (updateProps) {
      onUpdate?.({ id, _set: { ...vars, id } });
      setVariables(undefined);
    } else {
      onAdd?.({
        objects: [{ ...vars } as food_insert_input],
      });
      setVariables(undefined);
    }

    handleClose({});
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {updateProps ? <Trans>Add food</Trans> : <Trans>Update food</Trans>}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Trans>Always add attributes per 100g</Trans>
        </DialogContentText>
        <TextField
          className={classes.field}
          label={<Trans>Name</Trans>}
          defaultValue={updateProps?.name}
          onChange={(event) => handleSetVariable(event.target.value, "name")}
        />
        <FoodBrandSelect
          className={classes.field}
          foodBrandQR={foodBrandQR}
          value={variables?.food_brand}
          setValue={(value) => handleSetVariable(value, "food_brand")}
        />

        {data && (
          <Select
            defaultValue={
              variables?.type || data?.food_type_connection.edges[0].node.value
            }
            onChange={(event) => handleSetVariable(event.target.value, "type")}
            className={classes.field}
            placeholder={t`Select type`}
            label={<Trans>Select type</Trans>}
          >
            {data?.food_type_connection.edges.map(({ node: { value } }, i) => (
              <MenuItem key={i} value={value} children={value} />
            ))}
          </Select>
        )}

        <TextField
          className={classes.field}
          label={<Trans>Energy (cal)</Trans>}
          defaultValue={variables?.energy_cal}
          type={"number"}
          onChange={(event) =>
            handleSetVariable(event.target.value, "energy_cal")
          }
        />
        <TextField
          className={classes.field}
          label={<Trans>Energy (kJ)</Trans>}
          defaultValue={variables?.energy_kj}
          type={"number"}
          onChange={(event) =>
            handleSetVariable(event.target.value, "energy_kj")
          }
        />
        <TextField
          className={classes.field}
          label={<Trans>Proteins (g)</Trans>}
          defaultValue={variables?.proteins}
          type={"number"}
          onChange={(event) =>
            handleSetVariable(event.target.value, "proteins")
          }
        />
        <TextField
          className={classes.field}
          label={<Trans>Carbohydrates (g)</Trans>}
          defaultValue={variables?.carbohydrates}
          type={"number"}
          onChange={(event) =>
            handleSetVariable(event.target.value, "carbohydrates")
          }
        />
        <TextField
          className={classes.field}
          label={<Trans>Fats (g)</Trans>}
          defaultValue={variables?.fats}
          type={"number"}
          onChange={(event) => handleSetVariable(event.target.value, "fats")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          <Trans>Cancel</Trans>
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          <Trans>Submit</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
