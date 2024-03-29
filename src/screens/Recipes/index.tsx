import React, { Suspense, useDeferredValue, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import { t } from "@lingui/macro";
import { Grid, LinearProgress } from "@material-ui/core";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  RecipesPreloadedHookProps,
  useRecipes,
  useRecipesPreloaded,
} from "src/api-hooks/recipes";
import { useAddRecipeMutation } from "src/api-hooks/recipe";
import { FoodPreloadedHookProps, useFood } from "src/api-hooks/food";
import { useKeyPress } from "src/hooks/useKeyPress";
import { Key } from "src/types/key";
import { useStore } from "src/store";
import { useIsMobile } from "src/hooks/useIsMobile";
import { RecipeCard } from "./RecipeCard";
import { useStyles } from "./styles";
import { RecipeDrawer } from "./RecipeDrawer";

// TODO: operations on recipes in drawer + add new recipes
export const RecipesContent = ({
  recipesQR,
  foodQR,
}: RecipesPreloadedHookProps & FoodPreloadedHookProps) => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  const gridRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeRecipeId = searchParams.get("activeRecipeId") || "";
  const isDrawerOpen = searchParams.get("isDrawerOpen") === "true";
  const { data } = useRecipesPreloaded(recipesQR);
  const [add] = useAddRecipeMutation();
  const { user } = useActiveUser();

  const { setAction } = useStore();

  const gridWidth = useDeferredValue(gridRef?.current?.offsetWidth);

  useEffect(() => {
    if (elRef && elRef?.current) {
      elRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [gridWidth, elRef.current]);

  const handleAddRecipe = () => {
    const activeRecipeId = uuid();
    const data = {
      id: activeRecipeId,
      name: "New recipe",
      u_id: user?.id,
      recipe_items: null,
    };

    add({
      variables: {
        objects: [data],
      },
      onCompleted: (response, errors) => {
        if (!errors) {
          setSearchParams({
            activeRecipeId:
              response?.insert_recipe?.returning[0].id || activeRecipeId,
            isDrawerOpen: "true",
            isEditing: "true",
          });
        }
      },
    });
  };

  const handleCloseDrawer = () => {
    setSearchParams({ activeRecipeId: activeRecipeId, isDrawerOpen: "false", isEditing: 'false' });
  };

  const handleSetActiveRecipeId = (value: string) => {
    if (value === activeRecipeId && isDrawerOpen) {
      handleCloseDrawer();
    } else {
      setSearchParams({ activeRecipeId: value, isDrawerOpen: "true" });
    }
  };

  useEffect(() => {
    setAction({
      label: "+ Add new recipes",
      onClick: handleAddRecipe,
    });

    return () => {
      setAction(null);
    };
  }, []);

  useKeyPress([
    {
      // TODO: Up and Down handlers doesn't work
      key: Key.ArrowUp,
      callback: () => {
        const edges = data?.recipe_connection?.edges;
        const activeIndex = edges?.findIndex(
          ({ node }) => node?.id === activeRecipeId
        );
        const newIndex = activeIndex - 1;
        const newId = edges[newIndex]?.node?.id;
        if (newId) {
          handleSetActiveRecipeId(newId);
        }
      },
    },
    {
      key: Key.ArrowDown,
      callback: () => {
        const edges = data?.recipe_connection?.edges;
        const activeIndex = edges?.findIndex(
          ({ node }) => node?.id === activeRecipeId
        );
        const newIndex = activeIndex + 1;
        const newId = edges[newIndex]?.node?.id;
        if (newId) {
          handleSetActiveRecipeId(newId);
        }
      },
    },
    {
      key: Key.Escape,
      callback: () => handleCloseDrawer(),
    },
  ]);

  return (
    <div className={classes.root}>
      <Grid
        ref={gridRef}
        container
        justifyContent={"center"}
        spacing={2}
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawerOpen,
          [classes.contentDesktop]: !isMobile,
        })}
      >
        {data.recipe_connection.edges.map(
          ({ node }, i) =>
            node && (
              <Grid item key={i}>
                <RecipeCard
                  ref={node?.id === activeRecipeId ? elRef : null}
                  key={node?.name}
                  id={node?.id}
                  name={node?.name}
                  onClick={handleSetActiveRecipeId}
                  isActive={node?.id === activeRecipeId}
                  {...node.recipe_items_aggregate?.aggregate?.sum}
                />
              </Grid>
            )
        )}
      </Grid>

        <RecipeDrawer
          key={activeRecipeId}
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          id={activeRecipeId}
          recipesQR={recipesQR}
          foodQR={foodQR}
        />
    </div>
  );
};

export const Recipes = () => {
  const { queryReference: recipeQR } = useRecipes({});
  const { queryReference: foodQR } = useFood({});
  const { handlePageName } = useStore();

  useEffect(() => {
    handlePageName(t`Recipes`);
  }, []);

  const references = recipeQR && foodQR;

  return (
    <Suspense fallback={<LinearProgress />}>
      {references && <RecipesContent recipesQR={recipeQR} foodQR={foodQR} />}
    </Suspense>
  );
};
