import React  from "react";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import { Meals } from "./components/Meals";
import { FoodLibrary } from "./components/FoodLibrary";

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

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: typeof value
  ) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} variant={"fullWidth"}>
        {TABS.map((tab, key) => (
          <Tab label={<Trans>{tab.label}</Trans>} value={tab} key={key} />
        ))}
      </Tabs>
      <div className={classes.childContainer}>{value.component}</div>
    </div>
  );
};
