import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  CardHeader,
  createStyles,
  TextField,
  Typography,
  IconButton,
  Box,
  Input,
  Link,
} from "@material-ui/core";
import { EditRounded, DoneRounded, LinkRounded } from "@material-ui/icons";
import { Trans } from "@lingui/macro";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { AggregationChips } from "../../components/AggredationChips";
import {
  Recipe_Item_Aggregate,
  useAddRecipeMutation,
  useDeleteRecipeByPkMutation,
  useUpdateRecipeDescByPkMutation,
  useUpdateRecipeLinkByPkMutation,
  useUpdateRecipeNameByPkMutation,
  useUpdateRecipePortioningByPkMutation,
} from "../../graphql/generated/graphql";
import { useStore } from "../../store";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      maxWidth: 250,
      cursor: "pointer",
    },
    description: {
      margin: theme.spacing(1),
      cursor: "pointer",
    },
    editableDescription: {
      width: "100%",
    },

    editIcon: {
      marginLeft: theme.spacing(2),
    },
  })
);

export interface RecipeCardHeaderProps {
  id?: string;
  name?: string | null;
  link?: string | null;
  portions?: number | null;
  description?: string | null;
  recipe_items_aggregate?: Recipe_Item_Aggregate;
  u_id: string;
}

// TODO: error handling
export const RecipeCardHeader = ({
  id,
  name,
  link,
  portions,
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
  const [isEditLink, setIsEditLink] = useState(false);
  const [isEditPortions, setIsEditPortions] = useState(false);

  const [updatedName, setUpdatedName] = useState(name || "Enter recipe name");
  const [updatedDesc, setUpdatedDesc] = useState(description);
  const [updatedLink, setUpdatedLink] = useState(link);
  const [updatedPortioning, setUpdatedPortioning] = useState(portions);

  const [
    update_recipe_name_by_pk,
    { loading: titleLoading },
  ] = useUpdateRecipeNameByPkMutation({
    variables: {
      id,
      name: updatedName,
    },
    onCompleted: () => setIsEditTitle(false),
  });

  const [
    update_recipe_desc_by_pk,
    { loading: descLoading },
  ] = useUpdateRecipeDescByPkMutation({
    variables: {
      id,
      description: updatedDesc,
    },
    onCompleted: () => setIsEditDesc(false),
  });

  const [delete_recipe_by_pk] = useDeleteRecipeByPkMutation({
    variables: { id },
  });

  const [
    update_recipe_link_by_pk,
    { loading: linkLoading },
  ] = useUpdateRecipeLinkByPkMutation({
    variables: { id, link: updatedLink },
    onCompleted: () => setIsEditLink(false),
  });

  const [
    update_recipe_portions_by_pk,
    { loading: portionsLoading },
  ] = useUpdateRecipePortioningByPkMutation({
    variables: { id, portions: updatedPortioning },
    onCompleted: () => setIsEditPortions(false),
  });

  const [insert_recipe_one] = useAddRecipeMutation({
    variables: {
      u_id,
      description: updatedDesc,
    },
  });

  const macronutrients = recipe_items_aggregate?.aggregate?.sum;

  return (
    <>
      <CardHeader
        title={
          isEditTitle ? (
            <Box display={"flex"} alignItems={"center"}>
              <TextField
                defaultValue={name || updatedName}
                type={"text"}
                onChange={(event: any) => setUpdatedName(event?.target?.value)}
                className={classes.title}
                disabled={titleLoading}
              />
              <IconButton
                children={<DoneRounded />}
                onClick={() => update_recipe_name_by_pk()}
                disabled={titleLoading}
                className={classes.editIcon}
              />
            </Box>
          ) : (
            <Box display={"flex"} alignItems={"center"}>
              <div className={classes.title}>{updatedName}</div>
              <IconButton
                children={<EditRounded />}
                onClick={() => setIsEditTitle(true)}
                disabled={titleLoading}
                className={classes.editIcon}
              />
            </Box>
          )
        }
        action={
          <Box display={"flex"} alignItems={"center"}>
            {isPermitted &&
              (isEditPortions || !updatedPortioning ? (
                <Box display={"flex"} alignItems={"center"}>
                  <Typography id="input-slider" gutterBottom>
                    <Trans>
                      For how many portions did you enter the recipe?
                    </Trans>
                  </Typography>
                  <Input
                    error={!updatedPortioning}
                    value={updatedPortioning}
                    margin="dense"
                    disabled={portionsLoading}
                    onChange={(event) => {
                      setUpdatedPortioning(
                        event.target.value === ""
                          ? null
                          : Number(event.target.value)
                      );
                    }}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 100,
                      type: "number",
                    }}
                  />
                  <IconButton
                    children={<DoneRounded />}
                    onClick={() => update_recipe_portions_by_pk()}
                    disabled={portionsLoading || !updatedPortioning}
                    className={classes.editIcon}
                  />
                </Box>
              ) : (
                <Box display={"flex"} alignItems={"center"}>
                  <Typography
                    id="input-slider"
                    gutterBottom
                    variant={"overline"}
                    color={"textSecondary"}
                  >
                    <Trans>
                      Base recipe is for <strong>{updatedPortioning}</strong>
                      portions
                    </Trans>
                  </Typography>
                  <IconButton
                    children={<EditRounded />}
                    onClick={() => setIsEditPortions(true)}
                    disabled={portionsLoading}
                    className={classes.editIcon}
                  />
                </Box>
              ))}

            {u_id === "0" ? (
              <EditDeleteButtonGroup onConfirmClick={insert_recipe_one} />
            ) : (
              isPermitted && (
                <EditDeleteButtonGroup onDeleteClick={delete_recipe_by_pk} />
              )
            )}
          </Box>
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

        {isEditLink && isPermitted ? (
          <Box display={"flex"} alignItems={"center"}>
            <Box marginRight={2} display={"flex"} alignItems={"center"}>
              <LinkRounded />
            </Box>
            <TextField
              disabled={linkLoading}
              defaultValue={link || updatedLink}
              type={"text"}
              onChange={(event: any) => setUpdatedLink(event?.target?.value)}
              className={classes.editableDescription}
            />
            <IconButton
              children={<DoneRounded />}
              onClick={() => update_recipe_link_by_pk()}
              disabled={linkLoading}
              className={classes.editIcon}
            />
          </Box>
        ) : (
          <Box display={"flex"} alignItems={"center"}>
            <Box marginRight={2}>
              <LinkRounded />
            </Box>
            {updatedLink ? (
              <Link href={updatedLink} target="_blank" rel="noopener">
                {updatedLink}
              </Link>
            ) : (
              <Typography color={"textSecondary"}>
                <i>
                  <Trans>Add external link</Trans>
                </i>
              </Typography>
            )}
            {isPermitted && (
              <IconButton
                children={<EditRounded />}
                onClick={() => setIsEditLink(true)}
                disabled={linkLoading}
                className={classes.editIcon}
              />
            )}
          </Box>
        )}

        {isEditDesc ? (
          <Box display={"flex"} alignItems={"center"}>
            <TextField
              disabled={descLoading}
              defaultValue={description || updatedDesc}
              type={"text"}
              onChange={(event: any) => setUpdatedDesc(event?.target?.value)}
              className={classes.editableDescription}
            />
            <IconButton
              children={<DoneRounded />}
              onClick={() => update_recipe_desc_by_pk()}
              disabled={descLoading}
              className={classes.editIcon}
            />
          </Box>
        ) : (
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {updatedDesc || <Trans>Enter description</Trans>}
            </Typography>
            <IconButton
              children={<EditRounded />}
              onClick={() => setIsEditDesc(true)}
              disabled={descLoading}
              className={classes.editIcon}
            />
          </Box>
        )}
      </CardContent>
    </>
  );
};
