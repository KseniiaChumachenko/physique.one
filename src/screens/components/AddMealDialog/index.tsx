import React, { Suspense, useRef, useState } from "react";
import moment from "moment";
import { t, Trans } from "@lingui/macro";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@material-ui/core";
import { AddRounded, DeleteRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { TimePicker } from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import { useActiveUser } from "src/api-hooks/authorization";
import { AddMealMutation$variables } from "src/api-hooks/mealsByDate";
import {
  FoodPreloadedHookProps,
  useFood,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipesPreloadedHookProps,
  useRecipesPreloaded,
  useRecipes,
} from "src/api-hooks/recipes";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { MealAutocomplete } from "src/components/MealAutocomplete";
import { useStore } from "./useStore";

const useStyles = makeStyles((theme) => ({
  root: {},
  selectorsContainer: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  emptyBlock: {
    width: "44px",
  },
  autocompleteField: {
    marginTop: -theme.spacing(0.5),
  },
  smallerField: {
    marginLeft: theme.spacing(1),
    maxWidth: "120px",
  },
  deleteIcon: {
    opacity: 0.5,
  },
}));

interface Props {
  open: boolean;
  setOpen: any;
  date: string;
  onConfirm(state: AddMealMutation$variables): (event: any) => void;

  name?: string | null;
  time?: any;
}

type AddMealDialogProps = FoodPreloadedHookProps &
  RecipesPreloadedHookProps &
  Props;

const AddMealDialogDataFlow = ({
  open,
  setOpen,
  date,
  name: defaultName,
  onConfirm,
  foodQR,
  recipesQR,
}: AddMealDialogProps) => {
  const classes = useStyles();
  const { user } = useActiveUser();
  const { data: foods } = useFoodPreloadedQuery(foodQR);
  const {
    data: {
      recipe_connection: { edges: recipes },
    },
  } = useRecipesPreloaded(recipesQR);

  const [time, setTime] = useState(moment());
  const [name, setName] = useState(defaultName || "");

  const stateEndRef = useRef(null);
  const { state, handleAddItem, handleUpdateItem, handleRemoveItem } = useStore(
    foods
  );

  const handleChangeFoodItem = (key: number) => (selectId: string) => {
    let item;
    const r = recipes.find(({ node: { id } }) => id === selectId)?.node;
    if (r) {
      item = {
        id: r.id,
        recipe_id: r.id,
        name: r.name,
        type: "Recipe",
        carbohydrates: r?.recipe_items_aggregate?.aggregate?.sum?.carbohydrates,
        proteins: r?.recipe_items_aggregate?.aggregate?.sum?.proteins,
        fats: r?.recipe_items_aggregate?.aggregate?.sum?.fats,
        energy_cal: r?.recipe_items_aggregate?.aggregate?.sum?.energy_cal,
        energy_kj: r?.recipe_items_aggregate?.aggregate?.sum?.energy_kj,
        weight: r?.recipe_items_aggregate?.aggregate?.sum?.weight,
      };
    } else {
      item = foods.food_connection.edges.find(
        ({ node: { id } }) => id === selectId
      )?.node;
    }

    return handleUpdateItem({
      indexOfItem: key,
      food: item as any,
    });
  };

  const handleClose = (event: any) => {
    setOpen(false);
    event.stopPropagation();
  };

  const handleSubmit = onConfirm({
    data: [
      {
        name,
        date,
        time: moment(time).format("HH:mm"),
        meal_items: {
          data: state.map((i) => ({
            ...i,
            u_id: user?.id,
            recipe_id: i.recipe_id ? base64ToUuid(i.recipe_id) : null,
            food: i.food ? base64ToUuid(i.food) : null,
          })),
        },
        u_id: user?.id,
      },
    ],
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Trans>Add new meal</Trans>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Trans>
            Time when meal was or will be consumed could be added later later.
            Selection of ingredients meal consist of, could be listed in FOOD
            LIBRARY tab and extended by <b>Add food</b> button.
          </Trans>
        </DialogContentText>
        <div className={classes.selectorsContainer}>
          {/*TODO: Localization*/}
          <Autocomplete
            value={name}
            options={[t`Breakfast`, t`Lunch`, t`Dinner`, t`Supper`, t`Snack`]}
            getOptionLabel={(option) => option}
            onInputChange={(event, value) => {
              event?.preventDefault();
              setName(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label={<Trans>Name</Trans>} />
            )}
            freeSolo={true}
            fullWidth={true}
            disableClearable={true}
          />
          <TimePicker
            ampm={false}
            renderInput={(props: any) => (
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={time}
                className={classes.smallerField}
                {...props}
              />
            )}
            value={time}
            onChange={(time) => setTime(time as any)}
            label={<Trans>When</Trans>}
          />
          <IconButton className={classes.emptyBlock} disabled={true} />
        </div>
        {state.map((item, key) => (
          <div className={classes.selectorsContainer} key={key}>
            <MealAutocomplete
              value={item?.food || item?.recipe_id || ""}
              setValue={handleChangeFoodItem(key)}
              fullWidth={true}
              className={classes.autocompleteField}
              foodQR={foodQR}
              recipesQR={recipesQR}
            />
            <TextField
              label={<Trans>Weight (g)</Trans>}
              defaultValue={item.weight}
              onChange={(event) =>
                handleUpdateItem({
                  indexOfItem: key,
                  food:item,
                  weight: Number(event.target.value),
                })
              }
              className={classes.smallerField}
            />
            <IconButton
              className={classes.deleteIcon}
              children={<DeleteRounded />}
              onClick={() => handleRemoveItem({ id: item?.id || "" })}
              disabled={key === 0}
            />
          </div>
        ))}
        <Button
          color="primary"
          startIcon={<AddRounded />}
          onClick={handleAddItem}
          fullWidth={true}
        >
          <Trans>Add ingredient</Trans>
        </Button>
        <div ref={stateEndRef} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          <Trans> Cancel</Trans>
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          <Trans>Submit</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const AddMealDialog = ({
  open,
  setOpen,
  date,
  name,
  time,
  onConfirm,
}: Props) => {
  const { queryReference: foodQR } = useFood({});
  const { queryReference: recipeQR } = useRecipes({});

  return (
    <Suspense fallback={<div />}>
      {foodQR && recipeQR && (
        <AddMealDialogDataFlow
          open={open}
          setOpen={setOpen}
          date={date}
          name={name}
          time={time}
          onConfirm={onConfirm}
          foodQR={foodQR}
          recipesQR={recipeQR}
        />
      )}
    </Suspense>
  );
};
