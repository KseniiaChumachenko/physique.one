import React, { Suspense } from "react";
import { Accordion, AccordionDetails, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  MealsByDatePreloadedHookProps,
  useMealsByDateQuery,
  useMealsPreloadedQuery,
} from "src/api-hooks/mealsByDate";
import { FoodPreloadedHookProps, useFood } from "src/api-hooks/food";
import { RecipesPreloadedHookProps, useRecipes } from "src/api-hooks/recipes";
import { DayPanelHeader } from "./DayPanelHeader";
import { PanelSummary } from "./PanelSummary";
import { PanelDetailTable } from "./PanelDetailTable";

const useStyles = makeStyles((theme) => ({
  parentExpPanel: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    boxShadow: "none",
  },
  parentExpPanelDetails: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  childExpPanel: {
    "&$expanded": {
      margin: `${theme.spacing(1)}px 0`,
    },
  },
  expanded: {},
  progress: {
    display: "flex",
    margin: "50% 0",
  },
  header: {
    display: "flex",
  },
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  buttonGroup: {
    alignSelf: "flex-end",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

type ExtendProps = FoodPreloadedHookProps &
  RecipesPreloadedHookProps &
  MealsByDatePreloadedHookProps;

interface PanelsProps extends ExtendProps {
  date: string;
}

const Panels = ({ date, mealsQR, recipesQR, foodQR }: PanelsProps) => {
  const classes = useStyles();

  const {
    data,
    refetch,
    mutations: { destroy },
  } = useMealsPreloadedQuery(mealsQR);

  return (
    <Accordion className={classes.parentExpPanel} key={date + "Header"}>
      <DayPanelHeader date={date} mealsQR={mealsQR} />
      <AccordionDetails
        className={classes.parentExpPanelDetails}
        key={date + "panelDetail"}
      >
        {data?.meal_connection.edges.map(
          ({ node: item }, key) =>
            item && (
              <Accordion
                key={key}
                defaultExpanded={true}
                classes={{
                  root: classes.childExpPanel,
                  expanded: classes.expanded,
                }}
              >
                <PanelSummary
                  refetch={refetch}
                  foodQR={foodQR}
                  recipesQR={recipesQR}
                  destroy={destroy}
                  id={item?.id}
                  date={date}
                  name={item?.name}
                  time={item?.time}
                  meal_items_aggregate={item?.meal_items_aggregate}
                  key={key}
                />
                <AccordionDetails className={classes.parentExpPanelDetails}>
                  <PanelDetailTable
                    recipesQR={recipesQR}
                    foodQR={foodQR}
                    refetch={refetch}
                    meal_items={item?.meal_items_connection.edges.map(
                      ({ node }) => node
                    )}
                  />
                </AccordionDetails>
              </Accordion>
            )
        )}
      </AccordionDetails>
    </Accordion>
  );
};

interface Props {
  date: string;
}

export const DayPanels = ({ date }: Props) => {
  const { user } = useActiveUser();
  const { queryReference: foodQR } = useFood({});
  const { queryReference: recipeQR } = useRecipes({});
  const { queryReference: mealsQR } = useMealsByDateQuery({
    date,
    u_id: user?.id,
  });
  const references = mealsQR && foodQR && recipeQR;

  return (
    <Suspense fallback={<LinearProgress />}>
      {references && (
        <Panels
          date={date}
          mealsQR={mealsQR}
          foodQR={foodQR}
          recipesQR={recipeQR}
        />
      )}
    </Suspense>
  );
};
