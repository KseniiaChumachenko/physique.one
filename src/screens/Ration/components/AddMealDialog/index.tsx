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
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { AddRounded, DeleteRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { TimePicker } from "@material-ui/pickers";

import {
  Food,
  Meal_Item_Insert_Input,
  MealsListingDocument,
  useAddMealMutation,
  useFoodSelectFieldListingQuery,
} from "src/graphql/generated/graphql";
import { ToastMessage } from "src/components/ToastMessage";
import { useScrollToBottom } from "src/hooks/useScrollToBottom";
import { useStore } from "./useStore";
import MomentUtils from "@material-ui/pickers/adapter/moment";

const useStyles = makeStyles((theme) => ({
  root: {},
  selectorsContainer: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  field: {
    width: "100%",
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
  refetchPanel: any;

  name?: string | null;
  time?: any;
  meal_items?: Meal_Item_Insert_Input[];
}

const HARDCODED_U_ID = "7040b96b-0994-4f79-ac7e-6e0299fcad04";

export const AddMealDialog = ({
  open,
  setOpen,
  date,
  refetchPanel,
  name,
  time,
  meal_items,
}: Props) => {
  const { data, loading, error } = useFoodSelectFieldListingQuery();
  if (error) {
    return <ToastMessage severity={"error"} children={error?.message as any} />;
  }

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      {data && (
        <AddMealDialogDataFlow
          open={open}
          setOpen={setOpen}
          date={date}
          fetchedFoods={data.food as Food[]}
          refetchPanel={refetchPanel}
          name={name}
          time={time}
          meal_items={meal_items}
        />
      )}
    </>
  );
};

interface AddMealDialogProps extends Props {
  fetchedFoods: Food[];
}

const AddMealDialogDataFlow = observer<AddMealDialogProps>(
  ({
    open,
    setOpen,
    date,
    fetchedFoods,
    refetchPanel,
    name,
    time,
    meal_items,
  }) => {
    console.log(name, date);
    const [insert_meal_one, mutationResponse] = useAddMealMutation({
      onCompleted: () => {
        setOpen(false);
        refetchPanel();
      },
    });
    const classes = useStyles();
    const stateEndRef = useRef(null);
    const store = useStore(fetchedFoods, name, date, time, meal_items);
    console.log(store.name, store.time);

    useScrollToBottom(store.meal_items, stateEndRef); //TODO for some reason this stoped working

    if (mutationResponse.error) {
      return (
        <ToastMessage
          severity={"error"}
          children={mutationResponse.error.message as any}
        />
      );
    }

    if (mutationResponse.data) {
      return (
        <ToastMessage
          severity={"success"}
          children={<Trans>Meal {store.name} successfully added</Trans>}
        />
      );
    }

    const handleClose = () => {
      setOpen(false);
    };

    const handleInsertMealConfirmation = () =>
      insert_meal_one({
        variables: {
          name: store.name,
          date,
          time: moment(store.time).format("HH:mm"),
          data: store.meal_items,
          u_id: HARDCODED_U_ID,
          carbs: store.aggregated_carbs,
          proteins: store.aggregated_proteins,
          fats: store.aggregated_fats,
          energy_cal: store.aggregated_energyCal,
          energy_kj: store.aggregated_energyKj,
        },
      });

    const handleDeleteItem = (key: number) => () => store.remove_meal_item(key);

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
            <TextField
              className={classes.field}
              label={<Trans>Name</Trans>}
              value={store.name}
              onChange={(event) => store.setName(event.target.value)}
            />
            {console.log(store.time)}
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
              autoOk={true}
            />
          </div>
          {store.meal_items.map((item, key) => (
            <div className={classes.selectorsContainer} key={key}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={store.meal_items[0].food}
                value={item.food}
                onChange={(event) =>
                  store.update_meal_item({
                    indexOfItem: key,
                    foodId: event.target.value as string,
                    weight: store.meal_items[key].weight,
                  })
                }
                className={classes.field}
              >
                {store.foods.map((item, key) => (
                  <MenuItem value={item.id} key={key}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                label={<Trans>Weight (g)</Trans>}
                defaultValue={item.weight}
                onChange={(event) =>
                  store.update_meal_item({
                    indexOfItem: key,
                    foodId: store.meal_items[key].food,
                    weight: Number(event.target.value),
                  })
                }
                className={classes.smallerField}
              />
              {key > 0 && (
                <IconButton
                  className={classes.deleteIcon}
                  children={<DeleteRounded />}
                  onClick={handleDeleteItem(key)}
                />
              )}
            </div>
          ))}
          <Button
            color="primary"
            startIcon={<AddRounded />}
            className={classes.field}
            onClick={store.add_meal_item}
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
            onClick={handleInsertMealConfirmation}
            color="primary"
            autoFocus
            disabled={mutationResponse.loading}
          >
            <Trans>Submit</Trans>
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);
