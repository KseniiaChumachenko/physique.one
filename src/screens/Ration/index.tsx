import React, { useState } from "react";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Menu, MenuItem, Tab, Tabs } from "@material-ui/core";
import { Meals } from "./components/Meals";
import { FoodLibrary } from "./components/FoodLibrary";
import { AddRounded } from "@material-ui/icons";
import { AddMealDialog } from "./components/AddMealDialog";
import { AddFoodDialog } from "./components/AddFoodDialog";

const useStyles = makeStyles((theme) => ({
  root: {},
  childContainer: {
    paddingTop: theme.spacing(2),
  },
  fab: {
    position: "absolute",
    bottom: "5vh",
    right: theme.spacing(2),
  },
}));

const TABS = [
  {
    route: "ration/meals",
    label: "Meals",
    component: <Meals />,
  },
  {
    route: "ration/foodLibrary",
    label: "Food library",
    component: <FoodLibrary />,
  },
];

interface Props {}

export const Ration = ({}: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(TABS[0]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openAddMeals, setOpenAddMeals] = useState(false);
  const [openAddFood, setOpenAddFood] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: typeof value
  ) => {
    setValue(newValue);
  };

  const handleClickOpen = (setter: any) => () => {
    setter(true);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} variant={"fullWidth"}>
        {TABS.map((tab, key) => (
          <Tab label={<Trans>{tab.label}</Trans>} value={tab} key={key} />
        ))}
      </Tabs>
      <div className={classes.childContainer}>{value.component}</div>
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClick}
      >
        <AddRounded />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickOpen(setOpenAddMeals)}>
          <Trans>Add meal</Trans>
        </MenuItem>
        <MenuItem onClick={handleClickOpen(setOpenAddFood)}>
          <Trans>Add food</Trans>
        </MenuItem>
      </Menu>
      {/*<AddMealDialog open={openAddMeals} setOpen={setOpenAddMeals} />*/}
      <AddFoodDialog open={openAddFood} setOpen={setOpenAddFood} />
    </div>
  );
};
