import React, { useRef } from "react";
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
  LinearProgress,
  TextField,
} from "@material-ui/core";
import { AddRounded, DeleteRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { TimePicker } from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import { useStore as useGlobalStore } from "src/store";
import {
  AddMealMutationVariables,
  Food,
  Meal_Item,
  useFoodSelectFieldListingQuery,
} from "src/graphql/generated/graphql";
import { ToastMessage } from "src/components/ToastMessage";
import { useScrollToBottom } from "src/hooks/useScrollToBottom";
import { MealAutocomplete } from "../../../components/MealAutocomplete";
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
  meal_items?: Meal_Item[];
}

interface AddMealDialogProps extends Props {
  fetchedFoods: Food[];
}

const AddMealDialogDataFlow = observer<AddMealDialogProps>(
  ({
    open,
    setOpen,
    date,
    fetchedFoods,
    name,
    meal_items, //fetched data - TODO not needed
    onConfirm,
  }) => {
    const classes = useStyles();
    const {
      userStore: { user },
      recipeStore: { data: recipes },
      foodLibraryStore: { data: foods },
    } = useGlobalStore();
    const stateEndRef = useRef(null);
    const store = useStore(fetchedFoods as any, name, meal_items);

    useScrollToBottom(store.meal_items, stateEndRef); //TODO for some reason this stoped working

    const handleChangeFoodItem = (key: number) => (selectId: string) => {
      let item = foods[0].id;
      const r = recipes.find(({ id }) => id === selectId);
      if (r) {
        item = {
          id: r.id,
          recipe_id: r.id,
          name: r.name,
          type: "Recipe",
          carbohydrates: aggregate(r.recipe_items, "carbohydrates"),
          proteins: aggregate(r.recipe_items, "proteins"),
          fats: aggregate(r.recipe_items, "fats"),
          energy_cal: aggregate(r.recipe_items, "energy_cal"),
          energy_kj: aggregate(r.recipe_items, "energy_kj"),
          weight: aggregate(r.recipe_items, "weight"),
        };
      } else {
        item = foods.find(({ id }) => id === selectId);
      }

      return store.update_meal_item({
        indexOfItem: key,
        food: item,
      });
    };
    const handleClose = (event: any) => {
      setOpen(false);
      event.stopPropagation();
    };

    const handleDeleteItem = (id: string) => () => {
      store.remove_meal_item(id);
    };

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
                value={store.meal_items[key].id}
                setValue={handleChangeFoodItem(key)}
                fullWidth={true}
                className={classes.autocompleteField}
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
          <Button
            onClick={onConfirm({
              name: store.name,
              date,
              time: moment(store.time).format("HH:mm"),
              data: store.meal_items.map(
                ({ name, __typename, type, recipe, ...i }) => ({
                  u_id: user?.id,
                  ...i,
                })
              ),
              u_id: user?.id,
            })}
            color="primary"
            autoFocus
          >
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
  meal_items,
  onConfirm,
}: Props) => {
  const { data, loading, error } = useFoodSelectFieldListingQuery();
  if (error) {
    return <ToastMessage severity={"error"} children={error?.message as any} />;
  }

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <React.Fragment>
      {data && (
        <AddMealDialogDataFlow
          open={open}
          setOpen={setOpen}
          date={date}
          fetchedFoods={data.food as Food[]}
          name={name}
          time={time}
          meal_items={meal_items}
          onConfirm={onConfirm}
        />
      )}
    </React.Fragment>
  );
};
