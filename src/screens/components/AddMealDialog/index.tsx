import React, { Suspense, useRef } from "react";
import { observer } from "mobx-react-lite";
import moment from "moment";
import { Trans } from "@lingui/react";
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
import { useStore as useGlobalStore } from "src/store";
import { useScrollToBottom } from "src/hooks/useScrollToBottom";
import { AddMealMutationVariables } from "src/api-hooks/mealsByDate";
import {
  FoodPreloadedHookProps,
  useFood,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipePreloadedHookProps,
  useRecipePreloaded,
  useRecipe,
} from "src/api-hooks/recipe";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { MealAutocomplete } from "src/components/MealAutocomplete";
import { aggregate } from "../../Recipes/utils";
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
  onConfirm(state: AddMealMutationVariables): (event: any) => void;

  name?: string | null;
  time?: any;
}

type ExtendProps = FoodPreloadedHookProps & RecipePreloadedHookProps & Props;

interface AddMealDialogProps extends ExtendProps {}

const AddMealDialogDataFlow = observer<AddMealDialogProps>(
  ({ open, setOpen, date, name, onConfirm, foodQR, recipeQR }) => {
    const classes = useStyles();
    const {
      userStore: { user },
    } = useGlobalStore();
    const { data: foods } = useFoodPreloadedQuery(foodQR);
    const {
      data: {
        recipe_connection: { edges: recipes },
      },
    } = useRecipePreloaded(recipeQR);

    const stateEndRef = useRef(null);
    const store = useStore(foods, name);

    useScrollToBottom(store.meal_items, stateEndRef); //TODO for some reason this stoped working

    const handleChangeFoodItem = (key: number) => (selectId: string) => {
      let item;
      const r = recipes.find(({ node: { id } }) => id === selectId)?.node;
      if (r) {
        item = {
          id: r.id,
          recipe_id: r.id,
          name: r.name,
          type: "Recipe",
          carbohydrates: aggregate(r.recipe_items as any, "carbohydrates"),
          proteins: aggregate(r.recipe_items as any, "proteins"),
          fats: aggregate(r.recipe_items as any, "fats"),
          energy_cal: aggregate(r.recipe_items as any, "energy_cal"),
          energy_kj: aggregate(r.recipe_items as any, "energy_kj"),
          weight: aggregate(r.recipe_items as any, "weight"),
        };
      } else {
        item = foods.food_connection.edges.find(
          ({ node: { id } }) => id === selectId
        )?.node;
      }

      return store.update_meal_item({
        indexOfItem: key,
        food: item as any,
      });
    };
    const handleClose = (event: any) => {
      setOpen(false);
      event.stopPropagation();
    };

    const handleDeleteItem = (id?: string | null) => () => {
      if (id) {
        store.remove_meal_item(id);
      }
    };

    const handleSubmit = onConfirm({
      data: [
        {
          name: store.name,
          date,
          time: moment(store.time).format("HH:mm"),
          meal_items: {
            data: store.meal_items.map((i) => ({
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
              value={store.name || ""}
              options={["Breakfast", "Lunch", "Dinner", "Supper", "Snack"]}
              getOptionLabel={(option) => option}
              onInputChange={(event, value) => {
                event?.preventDefault();
                store.setName(value);
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
                  defaultValue={store.time}
                  className={classes.smallerField}
                  {...props}
                />
              )}
              value={store.time}
              onChange={(time) => store.setTime(time as any)}
              label={<Trans>When</Trans>}
            />
            <IconButton className={classes.emptyBlock} disabled={true} />
          </div>
          {store.meal_items.map((item, key) => (
            <div className={classes.selectorsContainer} key={key}>
              <MealAutocomplete
                value={store.meal_items[key].id ?? ""}
                setValue={handleChangeFoodItem(key)}
                fullWidth={true}
                className={classes.autocompleteField}
                foodQR={foodQR}
                recipeQR={recipeQR}
              />
              <TextField
                label={<Trans>Weight (g)</Trans>}
                defaultValue={item.weight}
                onChange={(event) =>
                  store.update_meal_item({
                    indexOfItem: key,
                    weight: Number(event.target.value),
                  })
                }
                className={classes.smallerField}
              />
              <IconButton
                className={classes.deleteIcon}
                children={<DeleteRounded />}
                onClick={handleDeleteItem(item.id)}
                disabled={key === 0}
              />
            </div>
          ))}
          <Button
            color="primary"
            startIcon={<AddRounded />}
            onClick={store.add_meal_item}
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
  }
);

export const AddMealDialog = ({
  open,
  setOpen,
  date,
  name,
  time,
  onConfirm,
}: Props) => {
  const { queryReference: foodQR } = useFood({});
  const { queryReference: recipeQR } = useRecipe({});

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
          recipeQR={recipeQR}
        />
      )}
    </Suspense>
  );
};
