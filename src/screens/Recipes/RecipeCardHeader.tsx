import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  CardHeader,
  ClickAwayListener,
  createStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Trans } from "@lingui/react";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { AggregationChips } from "../../components/AggredationChips";
import {
  Recipe_Item_Aggregate,
  useAddRecipeMutation,
  useDeleteRecipeByPkMutation,
  useUpdateRecipeDescByPkMutation,
  useUpdateRecipeNameByPkMutation,
} from "../../graphql/generated/graphql";
import { useStore } from "../../store";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      width: 250,
      cursor: "pointer",
    },
    description: {
      margin: theme.spacing(1),
      cursor: "pointer",
    },
    editableDescription: {
      width: "100%",
    },
  })
);

export interface RecipeCardHeaderProps {
  id?: string;
  name?: string | null;
  description?: string | null;
  recipe_items_aggregate?: Recipe_Item_Aggregate;
  u_id: string;
}

// TODO: error handling
export const RecipeCardHeader = ({
  id,
  name,
  recipe_items_aggregate,
  description,
  u_id,
}: RecipeCardHeaderProps) => {
  const classes = useStyles();
  const {
    userStore: {
      user: { id: userId },
    },
  } = useStore();
  const isPermitted = userId === u_id;
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditDesc, setIsEditDesc] = useState(false);

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDesc, setUpdatedDesc] = useState(description);

  const [
    update_recipe_name_by_pk,
    { loading: titleLoading },
  ] = useUpdateRecipeNameByPkMutation();
  const [
    update_recipe_desc_by_pk,
    { loading: descLoading },
  ] = useUpdateRecipeDescByPkMutation();
  const [delete_recipe_by_pk] = useDeleteRecipeByPkMutation({
    variables: { id },
  });

  const [insert_recipe_one] = useAddRecipeMutation({
    variables: {
      u_id,
      name: updatedName,
      description: updatedDesc,
    },
  });

  const macronutrients = recipe_items_aggregate?.aggregate?.sum;

  const handleSubmitTitle = () => {
    update_recipe_name_by_pk({
      variables: {
        id,
        name: updatedName,
      },
    });
    setIsEditTitle(false);
  };

  const handleSubmitDesc = () => {
    update_recipe_desc_by_pk({
      variables: {
        id,
        description: updatedDesc,
      },
    });
    setIsEditDesc(false);
  };

  return (
    <>
      <CardHeader
        title={
          isEditTitle ? (
            <ClickAwayListener onClickAway={handleSubmitTitle}>
              <TextField
                defaultValue={name || updatedName}
                type={"text"}
                onChange={(event: any) => setUpdatedName(event?.target?.value)}
                className={classes.title}
                disabled={titleLoading}
              />
            </ClickAwayListener>
          ) : (
            <div onClick={() => setIsEditTitle(true)} className={classes.title}>
              {updatedName}
            </div>
          )
        }
        action={
          u_id === "0" ? (
            <EditDeleteButtonGroup onConfirmClick={insert_recipe_one} />
          ) : (
            isPermitted && (
              <EditDeleteButtonGroup onDeleteClick={delete_recipe_by_pk} />
            )
          )
        }
      />
      <CardContent>
        {macronutrients?.energy_kj ? (
          <AggregationChips
            energy_cal={macronutrients.energy_cal!}
            energy_kj={macronutrients.energy_kj!}
            proteins={macronutrients.proteins!}
            carbohydrates={macronutrients.carbohydrates!}
            fats={macronutrients.fats!}
            weight={macronutrients.weight}
          />
        ) : null}

        {isEditDesc ? (
          <ClickAwayListener onClickAway={handleSubmitDesc}>
            <TextField
              disabled={descLoading}
              defaultValue={description || updatedDesc}
              type={"text"}
              onChange={(event: any) => setUpdatedDesc(event?.target?.value)}
              className={classes.editableDescription}
            />
          </ClickAwayListener>
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
            onClick={() => setIsEditDesc(true)}
          >
            {updatedDesc || <Trans>Description is empty</Trans>}
          </Typography>
        )}
      </CardContent>
    </>
  );
};
